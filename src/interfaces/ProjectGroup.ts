export interface ProjectGroup {
    _id: string;
    _type: 'projectGroup';
    title: string;
    slug: {
        _type: 'slug';
        current: string;
    };
    description: any[];
    projects: {
        _type: 'reference';
        _ref: string;
    }[];
}