export interface Project {
    url: string;
    _id: string;
    description: { [key: string]: unknown }[];
    mainImage: {
      asset: { [key: string]: unknown };
      _type: string;
    };
    slug: {
      current: string;
      _type: string;
    };
    repository?: string;
    technologies: { [key: string]: unknown }[];
    title: string;
  }
