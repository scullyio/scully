import { Octokit } from '@octokit/rest';
import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';
import './bump.js';
import { newVersion } from './cmdLineOptions.js';

const pat = process.env.BOT_PAT;
const repo = process.env.REPO_NAME;
const octokit = new Octokit({
  auth: pat,
  baseUrl: 'https://api.github.com',
  userAgent: 'Scully-Bot',
});

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

const git: SimpleGit = simpleGit(options);
await git.addConfig('user.name', 'Scully-Bot');
await git.addConfig('user.email', 'Scully-Bot@users.noreply.github.com');
await git.add('.');
await git.tag([`v${newVersion}`, '-m', `automated bump and tag of ${newVersion}`]);
await git.commit(`chore: bump version and tag it to ${newVersion}`);

await git.push(); // push package.json
await git.push(['--tags']); // push tags

// trigger the draft release
await octokit.request(`POST /repos/${repo}/releases`, {
  tag_name: `v${newVersion}`,
  generate_release_notes: true,
  draft: true,
});
