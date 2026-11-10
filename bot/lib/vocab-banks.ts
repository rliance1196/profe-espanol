export type QuizLevel = "beginner" | "intermediate";
export type QuizTopic = "greetings" | "food" | "travel" | "daily";
export type QuizDirection = "es_to_fr" | "fr_to_es";

export type VocabItem = {
  es: string;
  fr: string;
  hintEs?: string;
};

const BANKS: Record<QuizTopic, Record<QuizLevel, VocabItem[]>> = {
  greetings: {
    beginner: [
      { es: "hola", fr: "bonjour / salut" },
      { es: "buenos días", fr: "bonjour (matin)" },
      { es: "buenas noches", fr: "bonne nuit / bonsoir" },
      { es: "gracias", fr: "merci" },
      { es: "por favor", fr: "s'il vous plaît" },
      { es: "adiós", fr: "au revoir" },
    ],
    intermediate: [
      { es: "mucho gusto", fr: "enchanté(e)" },
      { es: "de nada", fr: "de rien" },
      { es: "perdón", fr: "pardon" },
      { es: "hasta luego", fr: "à tout à l'heure" },
      { es: "¿cómo estás?", fr: "comment vas-tu ?" },
      { es: "me llamo", fr: "je m'appelle" },
    ],
  },
  food: {
    beginner: [
      { es: "agua", fr: "eau" },
      { es: "pan", fr: "pain" },
      { es: "café", fr: "café" },
      { es: "fruta", fr: "fruit" },
      { es: "leche", fr: "lait" },
      { es: "queso", fr: "fromage" },
    ],
    intermediate: [
      { es: "desayuno", fr: "petit-déjeuner" },
      { es: "almuerzo", fr: "déjeuner" },
      { es: "cena", fr: "dîner" },
      { es: "la cuenta", fr: "l'addition" },
      { es: "picante", fr: "épicé" },
      { es: "vegetariano", fr: "végétarien" },
    ],
  },
  travel: {
    beginner: [
      { es: "tren", fr: "train" },
      { es: "avión", fr: "avion" },
      { es: "hotel", fr: "hôtel" },
      { es: "mapa", fr: "carte" },
      { es: "billete", fr: "billet" },
      { es: "estación", fr: "gare" },
    ],
    intermediate: [
      { es: "equipaje", fr: "bagages" },
      { es: "pasaporte", fr: "passeport" },
      { es: "retraso", fr: "retard" },
      { es: "ida y vuelta", fr: "aller-retour" },
      { es: "alquilar", fr: "louer" },
      { es: "dirección", fr: "adresse / direction" },
    ],
  },
  daily: {
    beginner: [
      { es: "casa", fr: "maison" },
      { es: "trabajo", fr: "travail" },
      { es: "amigo", fr: "ami" },
      { es: "hoy", fr: "aujourd'hui" },
      { es: "mañana", fr: "demain / matin" },
      { es: "noche", fr: "nuit" },
    ],
    intermediate: [
      { es: "despertarse", fr: "se réveiller" },
      { es: "ducharse", fr: "se doucher" },
      { es: "temprano", fr: "tôt" },
      { es: "tarde", fr: "tard / après-midi" },
      { es: "ocupado", fr: "occupé" },
      { es: "descansar", fr: "se reposer" },
    ],
  },
};

function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export type VocabQuizResult = {
  topic: QuizTopic;
  level: QuizLevel;
  direction: QuizDirection;
  prompt: string;
  promptLanguage: "es" | "fr";
  answer: string;
  answerLanguage: "es" | "fr";
  item: VocabItem;
  index: number;
  total: number;
};

export function makeVocabQuiz(input: {
  topic: QuizTopic;
  level: QuizLevel;
  direction: QuizDirection;
  seed?: string;
}): VocabQuizResult {
  const bank = BANKS[input.topic][input.level];
  const seed = input.seed?.trim() || `${input.topic}:${input.level}:${input.direction}`;
  const index = hashSeed(seed) % bank.length;
  const item = bank[index]!;
  if (input.direction === "es_to_fr") {
    return {
      topic: input.topic,
      level: input.level,
      direction: input.direction,
      prompt: item.es,
      promptLanguage: "es",
      answer: item.fr,
      answerLanguage: "fr",
      item,
      index,
      total: bank.length,
    };
  }
  return {
    topic: input.topic,
    level: input.level,
    direction: input.direction,
    prompt: item.fr,
    promptLanguage: "fr",
    answer: item.es,
    answerLanguage: "es",
    item,
    index,
    total: bank.length,
  };
}

export const QUIZ_TOPICS: QuizTopic[] = [
  "greetings",
  "food",
  "travel",
  "daily",
];
export const QUIZ_LEVELS: QuizLevel[] = ["beginner", "intermediate"];
