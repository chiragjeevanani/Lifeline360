import { spawn } from 'child_process';
import fs from 'fs';

const proc = spawn('cmd.exe', ['/c', 'npx', '-y', 'awwwards-mcp'], {
  stdio: ['pipe', 'pipe', 'inherit']
});

let buffer = '';
let results = [];

proc.stdout.on('data', (data) => {
  buffer += data.toString();
  const lines = buffer.split('\n');
  buffer = lines.pop();

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      const json = JSON.parse(trimmed);
      if (json.id >= 3) {
        results.push(json);
      }
    } catch (e) {}
  }
});

proc.stdin.write(JSON.stringify({
  jsonrpc: '2.0',
  id: 1,
  method: 'initialize',
  params: {
    protocolVersion: '2024-11-05',
    capabilities: {},
    clientInfo: { name: 'antigravity-client', version: '1.0.0' }
  }
}) + '\n');

setTimeout(() => {
  proc.stdin.write(JSON.stringify({
    jsonrpc: '2.0',
    id: 3,
    method: 'tools/call',
    params: {
      name: 'get_site_details',
      arguments: { slug: 'miralife-app' }
    }
  }) + '\n');
}, 2000);

setTimeout(() => {
  proc.stdin.write(JSON.stringify({
    jsonrpc: '2.0',
    id: 4,
    method: 'tools/call',
    params: {
      name: 'get_site_details',
      arguments: { slug: 'serus' }
    }
  }) + '\n');
}, 4000);

setTimeout(() => {
  fs.writeFileSync('scripts/awwwards_results.json', JSON.stringify(results, null, 2));
  proc.kill();
  process.exit(0);
}, 8000);
