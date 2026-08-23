import { SectionFrame } from "@/components/section-frame";
import { PRINCIPLES, PROFILE } from "@/lib/site";

export function AboutSection() {
  return (
    <SectionFrame id="about" index="02" label="About">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="font-display text-[length:var(--text-title)] leading-snug font-semibold tracking-[-0.03em] text-balance">
            The Engineer
          </p>
          <p className="mt-6 max-w-2xl text-[length:var(--text-lead)] leading-relaxed text-pretty text-ink-soft">
            I am C Yuva Teja, a Generative AI Engineer and B.Tech Computer
            Science student at The Apollo University. I care about the distance between a model and a
            working system — retrieval that holds context, prompts that return
            structure, and APIs that stay up when a provider does not.
          </p>
          <p className="mt-5 max-w-2xl text-[length:var(--text-body)] leading-relaxed text-pretty text-muted">
            Generative AI interests me because it is not a feature. It is a new
            material. Used well, it reads documents, evaluates ideas, and writes
            decisions people can inspect. Used poorly, it is a chatbot with a
            gradient. I build the former.
          </p>
          <p className="mt-8 max-w-xl text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-soft">
            <span className="meta text-accent">Now</span>
            <span className="mt-2 block">{PROFILE.now}</span>
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:col-span-5 lg:pt-2">
          <article>
            <h3 className="meta text-accent">Education</h3>
            <p className="mt-3 font-display text-lg font-semibold text-ink-soft">
              The Apollo University
            </p>
            <p className="mt-1 text-[length:var(--text-body)] text-muted">
              B.Tech Computer Science · 2024 – 2028
            </p>
          </article>
          <article>
            <h3 className="meta text-accent">What I Build</h3>
            <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-soft">
              Practical Generative AI systems: RAG platforms, local LLM
              products, structured generation APIs, and evaluation workflows
              that survive messy model output.
            </p>
          </article>
          <article>
            <h3 className="meta text-accent">The Direction</h3>
            <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-soft">
              Toward production-oriented AI products — reliable pipelines,
              honest evaluation, and systems a team can ship. Early in the
              career. Serious about the craft.
            </p>
          </article>
        </div>
      </div>

      <ul className="mt-16 grid gap-8 border-t border-line pt-10 md:grid-cols-3">
        {PRINCIPLES.map((item) => (
          <li key={item.title}>
            <h3 className="font-display text-lg font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-pretty text-muted">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </SectionFrame>
  );
}
