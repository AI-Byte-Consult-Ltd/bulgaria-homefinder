import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const folder = 'domenico-1bed';
const urls = [];
for (let i = 1; i <= 7; i++) {
  const buf = fs.readFileSync(`/tmp/domenico/${i}.jpg`);
  const path = `${folder}/${i}.jpg`;
  const { error } = await sb.storage.from('property-images').upload(path, buf, { contentType: 'image/jpeg', upsert: true });
  if (error) { console.error(i, error.message); process.exit(1); }
  urls.push(sb.storage.from('property-images').getPublicUrl(path).data.publicUrl);
}
console.log(JSON.stringify(urls, null, 2));
