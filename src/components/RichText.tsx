import React from 'react';

type Props = {
  text?: string | null;
  className?: string;
};

const isBulletLine = (line: string) =>
  /^(\u2022|•|\-|\–|\—|\*)\s+/.test(line);

const stripBullet = (line: string) =>
  line.replace(/^(\u2022|•|\-|\–|\—|\*)\s+/, '');

export const RichText: React.FC<Props> = ({ text, className }) => {
  if (!text) return null;

  const normalized = text.replace(/\r\n/g, '\n').trim();
  const blocks = normalized
    .split(/\n\s*\n/g)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div className={className}>
      {blocks.map((block, idx) => {
        const lines = block
          .split('\n')
          .map((l) => l.trim())
          .filter(Boolean);

        const bulletLines = lines.filter(isBulletLine);
        const nonBulletLines = lines.filter((l) => !isBulletLine(l));

        if (bulletLines.length > 0 && nonBulletLines.length === 0) {
          return (
            <ul key={idx} className="list-disc pl-5 space-y-1">
              {bulletLines.map((l, i) => (
                <li key={i}>{stripBullet(l)}</li>
              ))}
            </ul>
          );
        }

        return (
          <div key={idx} className="space-y-2">
            {nonBulletLines.length > 0 && (
              <p className="whitespace-pre-line">{nonBulletLines.join('\n')}</p>
            )}

            {bulletLines.length > 0 && (
              <ul className="list-disc pl-5 space-y-1">
                {bulletLines.map((l, i) => (
                  <li key={i}>{stripBullet(l)}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};