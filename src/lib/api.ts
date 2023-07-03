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
      repository,
      technologies[]->{_id, title, slug},
      title,
      url,
    }`;
    const projects = await useSanityClient().fetch(query);

    return projects;
  }

  export async function fetchSkills() {
    const query = groq`*[_type == "skillsList"] | order(title) {title, "skills" : skills[] -> {title, website}}`;
    const skills = await useSanityClient().fetch(query);

    return skills;
  }
