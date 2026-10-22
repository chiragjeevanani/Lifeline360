import { spawn } from 'child_process';

const proc = spawn('cmd.exe', ['/c', 'npx', '-y', 'awwwards-mcp'], {
  stdio: ['pipe', 'pipe', 'inherit']
});

let buffer = '';

proc.stdout.on('data', (data) => {
  buffer += data.toString();
  const lines = buffer.split('\n');
  buffer = lines.pop();

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      const json = JSON.parse(trimmed);
      if (json.id === 2) {
        console.log('CATEGORIES:', json?.result?.content?.[0]?.text?.slice(0, 1500));
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
    id: 2,
    method: 'tools/call',
    params: {
      name: 'list_categories',
      arguments: {}
    }
  }) + '\n');
}, 2000);

setTimeout(() => {
  proc.kill();
  process.exit(0);
}, 6000);
