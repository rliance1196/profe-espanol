import { defineTool } from "@grok/agent-sdk/tools";
import * as z from "zod/v4";
import { conjugateVerb, SUPPORTED_TENSES } from "../lib/spanish-verbs.js";

export default defineTool({
  description:
    "Look up indicative conjugations for a common Spanish verb (present, preterite, imperfect, future).",
  execution: "server",
  effect: "read",
  inputSchema: z.object({
    infinitive: z
      .string()
      .min(1)
      .describe("Spanish infinitive, e.g. hablar, ser, tener"),
    tense: z
      .enum(SUPPORTED_TENSES)
      .default("present")
      .describe("Indicative tense to return"),
  }),
  async execute({ infinitive, tense }) {
    return conjugateVerb(infinitive, tense);
  },
});
