import { useSanityClient, groq } from 'astro-sanity';

const queryGlobalSettings = groq`*[_type == "globalSettings"][0]`
const queryProfile = groq`*[_type == "profileDetails"][0]{
    ...,
    "image": image.asset->{
      _id,
      title,
      altText,
      description,
    }
  }`
const queryFeaturedProjects = groq`
  *[_type == "project" && featured] | order(_updatedAt desc) {
    _id,
    intro,
    description,
    "mainImage": mainImage.asset->{
      _id,
      title,
      altText,
      description,
    }, 
    slug,
    status,
    title,
    technologies[]->{_id, title, slug, description, website, tags[]->{title, slug}},
}`
const queryPageType = (type: string) => groq`*[_type == '${type}'][0] {
    ...,
    "seoImage": seoImage.asset -> {
      _id,
      title,
      altText,
      description
    }
  }`;

const queryProjectGroups = (slugs: string[]) => {
    const slugQueries = slugs.map(slug => `slug.current == "${slug}"`).join(' || ');
    return groq`*[_type == "projectGroup" && (${slugQueries})] | order(title asc) {
        _id,
        title,
        slug,
        description,
        projects[]->{
            _id, 
            intro, 
            "mainImage": mainImage.asset->{
                _id,
                title,
                altText,
                description,
            }, 
            slug, 
            status, 
            title, 
            technologies[]->{_id, title, slug,},
        },
    }`;
}


const querySkillsGroups = groq`*[_type == "skillsList"] | order(title) {
    title,
    "skills": skills[] -> {
      _id,
      title,
      slug,
      description,
      website
    }
  }`;

export async function fetchHomePage() {
    const query = groq`{
        "global": ${queryGlobalSettings},
        "page": ${queryPageType('homePage')},
        "profile": ${queryProfile},
        "projects": ${queryFeaturedProjects},
        "skillsGroups": ${querySkillsGroups},
    }`;
    const data = await useSanityClient().fetch(query);

    return data;
}

export async function fetchProjectsLandingPage() {
    const query = groq`{
        "global": ${queryGlobalSettings},
        "page": ${queryPageType('projectsPage')},
        "profile": ${queryProfile},
        "projectGroups": ${queryProjectGroups(['personal-projects', 'portfolio-projects'])},
    }`;
    
    const data = await useSanityClient().fetch(query);

    return data;
}