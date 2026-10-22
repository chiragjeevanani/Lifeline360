import fs from 'fs';

const data = JSON.parse(fs.readFileSync('scripts/awwwards_results.json', 'utf8'));

for (const item of data) {
  console.log('--- SITE ID:', item.id, '---');
  const contents = item?.result?.content || [];
  for (const c of contents) {
    if (c.type === 'text') {
      console.log(c.text);
    } else {
      console.log(`[Media content: ${c.type} (${c.mimeType})]`);
    }
  }
}
