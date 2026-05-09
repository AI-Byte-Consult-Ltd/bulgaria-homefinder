import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const FOLDER_ID = '12VgnGlaHctU612-f9YXVNpZIuEBPhwju';
const BUCKET_FOLDER = 'veliki-preslav-1br';
const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const list = await fetch(
  `https://connector-gateway.lovable.dev/google_drive/drive/v3/files?q=%27${FOLDER_ID}%27+in+parents&pageSize=200&fields=files(id,name)&orderBy=name`,
  { headers: { Authorization: `Bearer ${process.env.LOVABLE_API_KEY}`, 'X-Connection-Api-Key': process.env.GOOGLE_DRIVE_API_KEY } }
).then(r => r.json());

const files = list.files.sort((a,b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
console.log('count:', files.length);

const urls = [];
let i = 1;
for (const f of files) {
  const resp = await fetch(`https://connector-gateway.lovable.dev/google_drive/drive/v3/files/${f.id}?alt=media`, {
    headers: { Authorization: `Bearer ${process.env.LOVABLE_API_KEY}`, 'X-Connection-Api-Key': process.env.GOOGLE_DRIVE_API_KEY }
  });
  if (!resp.ok) { console.error('dl fail', f.name, resp.status); process.exit(1); }
  const buf = Buffer.from(await resp.arrayBuffer());
  const path = `${BUCKET_FOLDER}/${i}.jpg`;
  const { error } = await sb.storage.from('property-images').upload(path, buf, { contentType: 'image/jpeg', upsert: true });
  if (error) { console.error(i, error.message); process.exit(1); }
  urls.push(sb.storage.from('property-images').getPublicUrl(path).data.publicUrl);
  i++;
}
fs.writeFileSync('/tmp/vp_urls.json', JSON.stringify(urls, null, 2));
console.log('done', urls.length);
