import { useSanityClient, groq } from 'astro-sanity';

// Queries
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

const queryPageType = (type: string, slug: string) => groq`*[_type == '${type}' && slug.current == '${slug}']{
    ...,
    "seoImage": seoImage.asset -> {
      _id,
      title,
      altText,
      description
    }
  }[0]`;

const queryProject = (slug: string) => groq`*[_type == "project" && slug.current == '${slug}'] {
    _id,
    customUrl,
    description,
    featured,
    intro,
    "mainImage": mainImage.asset->{
      _id,
      title,
      altText,
      description,
    },
    "galleryImages": galleryImages[]{
      "image": asset->{
        _id,
        title,
        altText,
        description,
      }
    },
    relatedProjects[]->{
      _id, 
      slug, 
      title, 
      "mainImage": mainImage.asset->{
        _id,
        title,
        altText,
        description,
      }, 
      intro},
    relatedOrganizations[]->,
    repository,
    repositoryUsername,
    repositorySlug,
    slug,
    status,
    technologies[]->{_id, title, slug, description, website, tags[]->{title, slug}},
    tags[]->{title, slug},
    title,
    url,
  }[0]`;

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

// Fetch Requests
export async function fetchHomePage() {
  const query = groq`{
        "global": ${queryGlobalSettings},
        "page": ${queryPageType('homePage', 'astro-portfolio-home-page')},
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
        "page": ${queryPageType('landingPage', 'astro-portfolio-projects')},
        "profile": ${queryProfile},
        "projectGroups": ${queryProjectGroups(['professional-projects', 'personal-projects', 'portfolio-projects'])},
    }`;

  const data = await useSanityClient().fetch(query);

  return data;
}

export async function fetchProjectDetailPage(slug: string) {
  const query = groq`{
        "global": ${queryGlobalSettings},
        "profile": ${queryProfile},
        "project": ${queryProject(slug)},
    }`;

  const data = await useSanityClient().fetch(query);

  return data;
}
