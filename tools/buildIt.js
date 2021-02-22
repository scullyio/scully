import { exec } from 'child_process';
export async function buildPkg(pkg) {
  return await new Promise((resolve) => {
    console.log(`start build of ${pkg}`);
    exec(`npm run nx -- build ${pkg} --skip-nx-cache --with-deps`, (e, sto, ste) => {
      // console.log('build',pkg,sto,ste,e)
      console.log(`Build for ${pkg} done`);
      if (e !== null) {
        console.log(e);
        console.error(`Build failed for ${pkg}`, sto);
        process.exit(15);
      } else {
        console.log(`Builded ${pkg}`);
      }
      resolve({ e, sto, ste });
    });
  });
}
export async function buildAll() {
  return await new Promise((resolve) => {
    console.log(`Building all packages`);
    exec(`npm run build:code`, (e, sto, ste) => {
      // console.log('build',pkg,sto,ste,e)
      if (e !== null) {
        console.log(e);
        console.error(`Build failed!`, sto);
        process.exit(15);
      } else {
        console.log(`Builded all packages`);
      }
      resolve({ e, sto, ste });
    });
  });
}
