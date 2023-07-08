import colors from "./colors.json";
import type { LanguageColors } from "../interfaces/Language";

export const formatLanguageData = (
  languageObject: Record<string, number>
): { title: string; value: number; color: string }[] => {
  const totalBytes = Object.values(languageObject).reduce(
    (acc, val) => acc + val,
    0
  );

  const languageArray = Object.entries(languageObject).map(
    ([language, bytes]) => {
      const color =
        ((colors as unknown) as LanguageColors)[language]?.color || "#4B3616";
      return {
        title: language,
        value: parseFloat(((bytes / totalBytes) * 100).toFixed(1)),
        color,
      };
    }
  );

  languageArray.sort((a, b) => b.value - a.value);

  return languageArray;
};

export const getRepoSlug = (url: string) => {
  const domain = "github.com";
  const urlObject = new URL(url);

  if (urlObject.hostname.includes(domain)) {
    const path = urlObject.pathname;
    const slug = path.split("/").filter(Boolean).pop();
    return slug || null;
  }

  return null;
};

export const scrollToSection = (id: string): void => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
