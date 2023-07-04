import { useSanityClient, groq } from 'astro-sanity';

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



export async function fetchFeaturedProjects() {
  const query = groq`*[_type == "project" && featured] | order(_updatedAt desc) {
      _id,
      description,
      mainImage,
      slug,
      title,
    }`;
  const projects = await useSanityClient().fetch(query);

  return projects;
}

export async function fetchProject(slug: string) {
  const query = groq`*[_type == "project" && slug.current == '${slug}'] {
    _id,
    description,
    featured,
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
