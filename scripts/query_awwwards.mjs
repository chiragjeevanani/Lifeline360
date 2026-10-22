import { spawn } from 'child_process';

const proc = spawn('cmd.exe', ['/c', 'npx', '-y', 'awwwards-mcp'], {
  stdio: ['pipe', 'pipe', 'inherit']
});

let buffer = '';

proc.stdout.on('data', (data) => {
  buffer += data.toString();
  // Split on newlines to parse JSON-RPC responses
  const lines = buffer.split('\n');
  buffer = lines.pop(); // keep remainder

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      const json = JSON.parse(trimmed);
      console.log('RECEIVED_JSON_RPC:', JSON.stringify(json, null, 2));
    } catch (e) {
      // not json, maybe log line
      // console.log('LOG:', trimmed);
    }
  }
});

// Send initialize request
const initReq = {
  jsonrpc: '2.0',
  id: 1,
  method: 'initialize',
  params: {
    protocolVersion: '2024-11-05',
    capabilities: {},
    clientInfo: { name: 'antigravity-client', version: '1.0.0' }
  }
};

proc.stdin.write(JSON.stringify(initReq) + '\n');

// Wait 2 seconds and request tools/list
setTimeout(() => {
  const toolsReq = {
    jsonrpc: '2.0',
    id: 2,
    method: 'tools/list',
    params: {}
  };
  proc.stdin.write(JSON.stringify(toolsReq) + '\n');
}, 2500);

// Wait 5 seconds and exit
setTimeout(() => {
  proc.kill();
  process.exit(0);
}, 6000);
