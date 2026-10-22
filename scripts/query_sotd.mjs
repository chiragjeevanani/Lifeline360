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
      if (json.id >= 2) {
        const text = json?.result?.content?.[0]?.text;
        if (text) {
          console.log(`\n=== RESULT ${json.id} ===\n`, text.slice(0, 1500));
        }
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

// 1. List winners (SOTD)
setTimeout(() => {
  proc.stdin.write(JSON.stringify({
    jsonrpc: '2.0',
    id: 2,
    method: 'tools/call',
    params: {
      name: 'new_winners',
      arguments: { award: 'sotd' }
    }
  }) + '\n');
}, 2000);

// 2. Search sites by tag 'app-style' or 'health'
setTimeout(() => {
  proc.stdin.write(JSON.stringify({
    jsonrpc: '2.0',
    id: 3,
    method: 'tools/call',
    params: {
      name: 'search_sites',
      arguments: {
        tag: 'app-style',
        limit: 5
      }
    }
  }) + '\n');
}, 4500);

// Close
setTimeout(() => {
  proc.kill();
  process.exit(0);
}, 9000);
