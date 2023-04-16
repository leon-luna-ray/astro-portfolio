import { portableTextToHtml } from "astro-sanity";
import { getImageUrl } from "./images";

const customComponents = {
  types: {
    image: ({ value }) => {
      return `
        <picture>
          <source
            srcset="${getImageUrl(value.asset).format("webp").url()}"
            type="image/webp"
          />
          <img
            class="responsive__img"
            src="${getImageUrl(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
      `;
    },
  },
};

export function sanityPortableText(portableText: []) {
  return portableTextToHtml(portableText, customComponents);
}
