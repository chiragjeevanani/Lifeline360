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
      if (json.id === 3 || json.id === 4) {
        console.log('RESULT_ID_' + json.id + ':', JSON.stringify(json, null, 2));
      }
    } catch (e) {
      // ignore
    }
  }
});

// Initialize
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

// Call search_sites for healthcare / medical / emergency
setTimeout(() => {
  proc.stdin.write(JSON.stringify({
    jsonrpc: '2.0',
    id: 3,
    method: 'tools/call',
    params: {
      name: 'search_sites',
      arguments: {
        query: 'health emergency app technology',
        limit: 5
      }
    }
  }) + '\n');
}, 2500);

// Call search_motion for lenis
setTimeout(() => {
  proc.stdin.write(JSON.stringify({
    jsonrpc: '2.0',
    id: 4,
    method: 'tools/call',
    params: {
      name: 'search_motion',
      arguments: {
        lib: 'lenis',
        limit: 5
      }
    }
  }) + '\n');
}, 4500);

// Close after 10 seconds
setTimeout(() => {
  proc.kill();
  process.exit(0);
}, 10000);
