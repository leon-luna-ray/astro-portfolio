export interface Language {
    title: string;
    value: number;
    color: string;
  }
  
export interface LanguageColor {
  color: string;
  url: string;
}

export interface LanguageColors {
  [language: string]: LanguageColor;
}
