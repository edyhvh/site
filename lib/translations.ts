export type Language = 'en' | 'es';

export type Translations = {
  greeting: string;
  projects: string;
  education: string;
  art: string;
  projectDescriptions: {
    davar: string;
    shafan: string;
    nave: string;
    qahal: string;
  };
  educationItem: string;
  artDescriptions: {
    music: string;
    bible: string;
  };
  wip: string;
};

export const translations: Record<Language, Translations> = {
  en: {
    greeting: 'hello friend',
    projects: 'PROJECTS',
    education: 'EDUCATION',
    art: 'ART',
    projectDescriptions: {
      davar: 'bible app',
      shafan: 'bible app for advance learners',
      nave: 'trading copilot',
      qahal: '',
    },
    educationItem: 'Major in Business Administration',
    artDescriptions: {
      music: 'making music with AI',
      bible: 'learning about the bible and doing midrash',
    },
    wip: '[wip]',
  },
  es: {
    greeting: 'hola amigo',
    projects: 'PROYECTOS',
    education: 'EDUCACIÓN',
    art: 'ARTE',
    projectDescriptions: {
      davar: 'app de biblia',
      shafan: 'app de biblia para estudiantes avanzados',
      nave: 'copiloto de trading',
      qahal: '',
    },
    educationItem: 'Licenciatura en Administración de Empresas',
    artDescriptions: {
      music: 'haciendo música con IA',
      bible: 'aprendiendo sobre la biblia y haciendo midrash',
    },
    wip: '[en desarrollo]',
  },
};

export function detectLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('es')) {
    return 'es';
  }
  
  return 'en';
}
