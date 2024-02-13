import { Octokit } from 'octokit';
import { formatLanguageData } from '../utils/utils';

const octokit = new Octokit({});

export async function fetchRepository(username: string, slug: string) {
  try {
    const repository = await octokit.request(
      `GET /repos/${username}/${slug}`,
      {
        owner: username,
        repo: slug,
        auth: import.meta.env.VITE_GITHUB_API_KEY,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );
    return repository.data;
  } catch (error) {
    console.error('Error fetching languages:', error);
    throw error;
  }
}

export async function fetchLanguages(username: string, slug: string) {
  try {
    const languages = await octokit.request(
      `GET /repos/${username}/${slug}/languages`,
      {
        owner: username,
        repo: slug,
        auth: import.meta.env.VITE_GITHUB_API_KEY,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );
    return formatLanguageData(languages.data);
  } catch (error) {
    console.error('Error fetching languages:', error);
    throw error;
  }
}

export async function fetchCommits(username: string, slug: string) {
  try {
    const commits = await octokit.request(
      `GET /repos/${username}/${slug}/commits`,
      {
        owner: username,
        repo: slug,
        auth: import.meta.env.VITE_GITHUB_API_KEY,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );
    return commits.data;
  } catch (error) {
    console.error('Error fetching commits:', error);
    throw error;
  }
}
