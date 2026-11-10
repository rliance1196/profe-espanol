export type Mood = "indicative";
export type Tense = "present" | "preterite" | "imperfect" | "future";
export type Person =
  | "yo"
  | "tu"
  | "el"
  | "nosotros"
  | "vosotros"
  | "ellos";

export type ConjugationTable = Record<Person, string>;

type VerbEntry = {
  infinitive: string;
  translationFr: string;
  forms: Partial<Record<Tense, ConjugationTable>>;
};

const PERSONS: Person[] = ["yo", "tu", "el", "nosotros", "vosotros", "ellos"];

const VERBS: Record<string, VerbEntry> = {
  ser: {
    infinitive: "ser",
    translationFr: "être",
    forms: {
      present: {
        yo: "soy",
        tu: "eres",
        el: "es",
        nosotros: "somos",
        vosotros: "sois",
        ellos: "son",
      },
      preterite: {
        yo: "fui",
        tu: "fuiste",
        el: "fue",
        nosotros: "fuimos",
        vosotros: "fuisteis",
        ellos: "fueron",
      },
      imperfect: {
        yo: "era",
        tu: "eras",
        el: "era",
        nosotros: "éramos",
        vosotros: "erais",
        ellos: "eran",
      },
      future: {
        yo: "seré",
        tu: "serás",
        el: "será",
        nosotros: "seremos",
        vosotros: "seréis",
        ellos: "serán",
      },
    },
  },
  estar: {
    infinitive: "estar",
    translationFr: "être (état / lieu)",
    forms: {
      present: {
        yo: "estoy",
        tu: "estás",
        el: "está",
        nosotros: "estamos",
        vosotros: "estáis",
        ellos: "están",
      },
      preterite: {
        yo: "estuve",
        tu: "estuviste",
        el: "estuvo",
        nosotros: "estuvimos",
        vosotros: "estuvisteis",
        ellos: "estuvieron",
      },
      imperfect: {
        yo: "estaba",
        tu: "estabas",
        el: "estaba",
        nosotros: "estábamos",
        vosotros: "estabais",
        ellos: "estaban",
      },
      future: {
        yo: "estaré",
        tu: "estarás",
        el: "estará",
        nosotros: "estaremos",
        vosotros: "estaréis",
        ellos: "estarán",
      },
    },
  },
  tener: {
    infinitive: "tener",
    translationFr: "avoir",
    forms: {
      present: {
        yo: "tengo",
        tu: "tienes",
        el: "tiene",
        nosotros: "tenemos",
        vosotros: "tenéis",
        ellos: "tienen",
      },
      preterite: {
        yo: "tuve",
        tu: "tuviste",
        el: "tuvo",
        nosotros: "tuvimos",
        vosotros: "tuvisteis",
        ellos: "tuvieron",
      },
      imperfect: {
        yo: "tenía",
        tu: "tenías",
        el: "tenía",
        nosotros: "teníamos",
        vosotros: "teníais",
        ellos: "tenían",
      },
      future: {
        yo: "tendré",
        tu: "tendrás",
        el: "tendrá",
        nosotros: "tendremos",
        vosotros: "tendréis",
        ellos: "tendrán",
      },
    },
  },
  ir: {
    infinitive: "ir",
    translationFr: "aller",
    forms: {
      present: {
        yo: "voy",
        tu: "vas",
        el: "va",
        nosotros: "vamos",
        vosotros: "vais",
        ellos: "van",
      },
      preterite: {
        yo: "fui",
        tu: "fuiste",
        el: "fue",
        nosotros: "fuimos",
        vosotros: "fuisteis",
        ellos: "fueron",
      },
      imperfect: {
        yo: "iba",
        tu: "ibas",
        el: "iba",
        nosotros: "íbamos",
        vosotros: "ibais",
        ellos: "iban",
      },
      future: {
        yo: "iré",
        tu: "irás",
        el: "irá",
        nosotros: "iremos",
        vosotros: "iréis",
        ellos: "irán",
      },
    },
  },
  hablar: {
    infinitive: "hablar",
    translationFr: "parler",
    forms: {
      present: {
        yo: "hablo",
        tu: "hablas",
        el: "habla",
        nosotros: "hablamos",
        vosotros: "habláis",
        ellos: "hablan",
      },
      preterite: {
        yo: "hablé",
        tu: "hablaste",
        el: "habló",
        nosotros: "hablamos",
        vosotros: "hablasteis",
        ellos: "hablaron",
      },
      imperfect: {
        yo: "hablaba",
        tu: "hablabas",
        el: "hablaba",
        nosotros: "hablábamos",
        vosotros: "hablabais",
        ellos: "hablaban",
      },
      future: {
        yo: "hablaré",
        tu: "hablarás",
        el: "hablará",
        nosotros: "hablaremos",
        vosotros: "hablaréis",
        ellos: "hablarán",
      },
    },
  },
  comer: {
    infinitive: "comer",
    translationFr: "manger",
    forms: {
      present: {
        yo: "como",
        tu: "comes",
        el: "come",
        nosotros: "comemos",
        vosotros: "coméis",
        ellos: "comen",
      },
      preterite: {
        yo: "comí",
        tu: "comiste",
        el: "comió",
        nosotros: "comimos",
        vosotros: "comisteis",
        ellos: "comieron",
      },
      imperfect: {
        yo: "comía",
        tu: "comías",
        el: "comía",
        nosotros: "comíamos",
        vosotros: "comíais",
        ellos: "comían",
      },
      future: {
        yo: "comeré",
        tu: "comerás",
        el: "comerá",
        nosotros: "comeremos",
        vosotros: "comeréis",
        ellos: "comerán",
      },
    },
  },
  vivir: {
    infinitive: "vivir",
    translationFr: "vivre",
    forms: {
      present: {
        yo: "vivo",
        tu: "vives",
        el: "vive",
        nosotros: "vivimos",
        vosotros: "vivís",
        ellos: "viven",
      },
      preterite: {
        yo: "viví",
        tu: "viviste",
        el: "vivió",
        nosotros: "vivimos",
        vosotros: "vivisteis",
        ellos: "vivieron",
      },
      imperfect: {
        yo: "vivía",
        tu: "vivías",
        el: "vivía",
        nosotros: "vivíamos",
        vosotros: "vivíais",
        ellos: "vivían",
      },
      future: {
        yo: "viviré",
        tu: "vivirás",
        el: "vivirá",
        nosotros: "viviremos",
        vosotros: "viviréis",
        ellos: "vivirán",
      },
    },
  },
  hacer: {
    infinitive: "hacer",
    translationFr: "faire",
    forms: {
      present: {
        yo: "hago",
        tu: "haces",
        el: "hace",
        nosotros: "hacemos",
        vosotros: "hacéis",
        ellos: "hacen",
      },
      preterite: {
        yo: "hice",
        tu: "hiciste",
        el: "hizo",
        nosotros: "hicimos",
        vosotros: "hicisteis",
        ellos: "hicieron",
      },
      imperfect: {
        yo: "hacía",
        tu: "hacías",
        el: "hacía",
        nosotros: "hacíamos",
        vosotros: "hacíais",
        ellos: "hacían",
      },
      future: {
        yo: "haré",
        tu: "harás",
        el: "hará",
        nosotros: "haremos",
        vosotros: "haréis",
        ellos: "harán",
      },
    },
  },
};

export const SUPPORTED_TENSES: Tense[] = [
  "present",
  "preterite",
  "imperfect",
  "future",
];

export function listKnownVerbs(): string[] {
  return Object.keys(VERBS).sort();
}

export type ConjugateResult =
  | {
      found: true;
      infinitive: string;
      translationFr: string;
      mood: Mood;
      tense: Tense;
      forms: ConjugationTable;
      persons: Person[];
    }
  | {
      found: false;
      infinitive: string;
      knownVerbs: string[];
      supportedTenses: Tense[];
      hint: string;
    };

export function conjugateVerb(
  infinitiveRaw: string,
  tense: Tense,
): ConjugateResult {
  const infinitive = infinitiveRaw.trim().toLowerCase();
  const entry = VERBS[infinitive];
  if (!entry) {
    return {
      found: false,
      infinitive,
      knownVerbs: listKnownVerbs(),
      supportedTenses: SUPPORTED_TENSES,
      hint: "Verb not in the built-in table. Teach from knowledge or pick a known verb.",
    };
  }
  const forms = entry.forms[tense];
  if (!forms) {
    return {
      found: false,
      infinitive,
      knownVerbs: listKnownVerbs(),
      supportedTenses: SUPPORTED_TENSES,
      hint: `Tense "${tense}" is not available for ${infinitive}.`,
    };
  }
  return {
    found: true,
    infinitive: entry.infinitive,
    translationFr: entry.translationFr,
    mood: "indicative",
    tense,
    forms,
    persons: PERSONS,
  };
}
