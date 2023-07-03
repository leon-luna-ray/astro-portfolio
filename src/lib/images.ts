import { useSanityClient } from 'astro-sanity';
import { createImageBuilder } from 'astro-sanity';

export const imageBuilder = createImageBuilder(useSanityClient());

export function getImageUrl(source:object) {
  return imageBuilder.image(source);
}

export function getThumbnailUrl(source:object) {
  return getImageUrl(source).size(300,300).url();
}
export function getLargeUrl(source: object) {
  return getImageUrl(source).fit('max').width(1200).height(1200).url();
}