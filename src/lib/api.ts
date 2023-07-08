import { useSanityClient, groq } from 'astro-sanity';
import { Octokit } from 'octokit';
import { formatLanguageData } from '../utils/utils';

// Octokit
const octokit = new Octokit({});

export async function fetchLanguages(slug: string) {
  try {
    const languages = await octokit.request(
      `GET /repos/leon-luna-ray/${slug}/languages`,
      {
        owner: import.meta.env.VITE_GITHUB_USERNAME,
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

// Sanity
export async function fetchGlobal() {
  const query = `*[_type == "globalSettings"][0]`;
  const global = await useSanityClient().fetch(query);

  return global;
}

export async function fetchProfile() {
  const query = groq`*[_type == "profileDetails"][0]`;
  const profile = await useSanityClient().fetch(query);

  return profile;
}

export async function fetchHobbies() {
  const query = groq`*[_type == "profileDetails"][0] {hobbies[]->}`;
  const hobbies = await useSanityClient().fetch(query);

  return hobbies;
}

export async function fetchProjects() {
  const query = groq`*[_type == "project"] | order(title asc) {
      _id,
      intro,
      mainImage,
      slug,
      status,
      title,
    }`;
  const projects = await useSanityClient().fetch(query);

  return projects;
}

export async function fetchFeaturedProjects() {
  const query = groq`*[_type == "project" && featured] | order(_updatedAt desc) {
      _id,
      intro,
      description,
      mainImage,
      slug,
      status,
      title,
    }`;
  const projects = await useSanityClient().fetch(query);

  return projects;
}

export async function fetchProject(slug: string) {
  const query = groq`*[_type == "project" && slug.current == '${slug}'] {
    _id,
    customUrl,
    description,
    featured,
    intro,
    mainImage,
    repository,
    slug,
    status,
    technologies[]->{_id, title, slug, description, website, tags[]->{title, slug}},
    tags[]->{title, slug},
    title,
    url,
  }`;

  const project = await useSanityClient().fetch(query);
  return project[0];
}

export async function fetchSkills() {
  const query = groq`*[_type == "skillsList"] | order(title) {title, "skills" : skills[] -> {title, website}}`;
  const skills = await useSanityClient().fetch(query);

  return skills;
}
