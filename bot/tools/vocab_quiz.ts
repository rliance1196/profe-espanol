import { defineTool } from "@grok/agent-sdk/tools";
import * as z from "zod/v4";
import {
  makeVocabQuiz,
  QUIZ_LEVELS,
  QUIZ_TOPICS,
} from "../lib/vocab-banks.js";

export default defineTool({
  description:
    "Build one Spanish↔French vocabulary quiz prompt for a topic and level.",
  execution: "server",
  effect: "read",
  inputSchema: z.object({
    topic: z.enum(QUIZ_TOPICS).describe("Vocabulary theme"),
    level: z
      .enum(QUIZ_LEVELS)
      .default("beginner")
      .describe("Learner level"),
    direction: z
      .enum(["es_to_fr", "fr_to_es"])
      .default("es_to_fr")
      .describe("es_to_fr: show Spanish, expect French; fr_to_es: reverse"),
    seed: z
      .string()
      .optional()
      .describe("Optional seed to pick a stable item (e.g. session id + n)"),
  }),
  async execute(input) {
    return makeVocabQuiz(input);
  },
});
