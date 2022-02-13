export interface Translation {
  id?: string;
  key: string;
  owner: string;
  project: string;
  langTranslations: LanguageTranslation[];
}

export interface LanguageTranslation {
  id?: string;
  langKey: string;
  translationText: string;
}
