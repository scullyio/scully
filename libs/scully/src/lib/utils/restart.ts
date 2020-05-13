import { spawn } from 'child_process';

export function restartProcess() {
  process.on('exit', () => {
    spawn(process.argv.shift(), process.argv, {
      cwd: process.cwd(),
      detached: true,
      stdio: 'inherit'
    });
  });
  process.exit();
}
