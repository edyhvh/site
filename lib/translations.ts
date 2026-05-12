export type Language = "en" | "es";

export type Translations = {
  greeting: string;
  projects: string;
  education: string;
  art: string;
  projectDescriptions: {
    davar: string;
    nave: string;
    qahal: string;
    car: string;
  };
  educationItem: string;
  artDescriptions: {
    music: string;
    bible: string;
  };
  wip: string;
  privateLabel: string;
};

export const translations: Record<Language, Translations> = {
  en: {
    greeting: "hello friend",
    projects: "PROJECTS",
    education: "EDUCATION",
    art: "ART",
    projectDescriptions: {
      davar: "bible app",
      nave: "trading copilot",
      qahal: "find people in the emunah close to you",
      car: "long distance ride sharing",
    },
    educationItem: "Major in Business Administration",
    artDescriptions: {
      music: "making music with AI",
      bible: "learning about the bible and doing midrash",
    },
    wip: "[wip]",
    privateLabel: "private",
  },
  es: {
    greeting: "hola amigo",
    projects: "PROYECTOS",
    education: "EDUCACIÓN",
    art: "ARTE",
    projectDescriptions: {
      davar: "app de biblia",
      nave: "copiloto de trading",
      qahal: "encuentra personas en la emunah cerca de ti",
      car: "ride sharing de larga distancia",
    },
    educationItem: "Licenciatura en Administración de Empresas",
    artDescriptions: {
      music: "haciendo música con IA",
      bible: "aprendiendo sobre la biblia y haciendo midrash",
    },
    wip: "[en desarrollo]",
    privateLabel: "privado",
  },
};

export function detectLanguage(): Language {
  if (typeof window === "undefined") return "en";

  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith("es")) {
    return "es";
  }

  return "en";
}
