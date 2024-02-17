import type { Image } from './Image';

export interface Organization {
    website: string;
    _createdAt: string;
    _type: string;
    description: any[]; // You can define a more specific type if the structure is known
    title: string;
    image: Image;
    _rev: string;
    _id: string;
    _updatedAt: string;
  }