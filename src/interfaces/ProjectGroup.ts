import type { Project } from './Project';

export interface ProjectGroup {
    _id: string;
    _type: 'projectGroup';
    title: string;
    slug: {
        _type: 'slug';
        current: string;
    };
    description: [];
    projects: Project[];
}