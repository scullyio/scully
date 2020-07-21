/** Array of language abbreviations collected from available routes */
export type AllLanguages = string[];

/** Values to substitute for given page language */
export interface LanguageDefaults {
  labels: { [key: string]: string };
  routes: { [key: string]: string };
}

/** Alternate routes for other languages of a given page */
export interface PageLanguages {
  [key: string]: string;
}

/** Observable object holding keys of PageLanguages */
export interface PageLanguageData {
  [key: string]: PageLanguages;
}

/** Clarity for template variables */
export interface PageLangRoutes {
  lang: string;
  route: string;
}

/** Consumed by template */
export interface CurrentPageLanguageData {
  allLangs: string[];
  langRoutes?: PageLanguages;
  pageLang: string;
  pageLangRoutes: PageLangRoutes[];
}
