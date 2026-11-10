import { defineEval } from "@grok/agent-sdk/evals";

export default defineEval({
  tags: ["smoke"],
  description: "Conjugation request uses conjugate_verb and succeeds.",
  async test(t) {
    await t.send(
      "Hola profe. ¿Puedes conjugar el verbo 'hablar' en presente de indicativo? Muéstrame todas las personas.",
    );
    t.succeeded();
    t.calledTool("conjugate_verb");
  },
});
