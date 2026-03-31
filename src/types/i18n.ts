export interface I18nNamespaces {
  common: 'common';
  home: 'home';
  app: 'app';
}

export type SupportedLanguages = 'en' | 'uk';

export interface LanguageConfig {
  code: SupportedLanguages;
  name: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
  },
  {
    code: 'uk',
    name: 'Ukrainian',
    nativeName: 'Українська',
    flag: '🇺🇦',
  },
];

export interface TranslationKeys {
  common: {
    navigation: {
      home: string;
      vehicles: string;
      about: string;
      contact: string;
    };
    actions: {
      save: string;
      cancel: string;
      edit: string;
      delete: string;
      add: string;
      search: string;
      filter: string;
      sort: string;
      refresh: string;
    };
    status: {
      loading: string;
      error: string;
      success: string;
      warning: string;
      info: string;
    };
    common: {
      yes: string;
      no: string;
      ok: string;
      close: string;
      back: string;
      next: string;
      previous: string;
      submit: string;
      reset: string;
    };
    language: {
      en: string;
      uk: string;
      switchLanguage: string;
    };
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    features: {
      title: string;
      react: {
        title: string;
        description: string;
      };
      tailwind: {
        title: string;
        description: string;
      };
      query: {
        title: string;
        description: string;
      };
    };
    api: {
      title: string;
      response: string;
      loading: string;
      error: string;
    };
    technologies: {
      title: string;
      description: string;
    };
  };
  app: {
    app: {
      name: string;
      version: string;
      description: string;
    };
    ui: {
      theme: {
        light: string;
        dark: string;
        auto: string;
      };
      layout: {
        sidebar: string;
        header: string;
        footer: string;
        main: string;
      };
    };
    settings: {
      title: string;
      language: string;
      theme: string;
      notifications: string;
      privacy: string;
      about: string;
    };
    errors: {
      general: string;
      network: string;
      notFound: string;
      unauthorized: string;
      serverError: string;
    };
  };
}
