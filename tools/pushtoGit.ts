import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';

export async function pushToGit(commitMessage: string) {
  const options: Partial<SimpleGitOptions> = {
    baseDir: process.cwd(),
    binary: 'git',
    maxConcurrentProcesses: 6,
  };

  const git: SimpleGit = simpleGit(options);
  await git.addConfig('user.name', 'workflow-bot');
  await git.addConfig('user.email', 'workflow-bot@users.noreply.github.com');
  await git.add('.');
  await git.commit(commitMessage);
  try {
    const resp = await git.push();
  } catch (e) {
    console.error(e);
  }
}
