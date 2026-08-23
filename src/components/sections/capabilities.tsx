import { SectionFrame } from "@/components/section-frame";
import { CAPABILITIES } from "@/lib/site";

export function CapabilitiesSection() {
  const groups = [
    CAPABILITIES.primary,
    CAPABILITIES.engineering,
    CAPABILITIES.toolkit,
  ];

  return (
    <SectionFrame id="capabilities" index="05" label="AI Engineering Capabilities" tone="night">
      <p className="max-w-2xl text-[length:var(--text-lead)] leading-snug text-pretty text-muted-on-night">
        Primary area: Generative AI. Supporting is the engineering required to
        put models into products — APIs, pipelines, evaluation, and deployment.
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="meta text-stone">{group.title}</h3>
            <ul className="mt-6 divide-y divide-line-night">
              {group.items.map((item) => (
                <li key={item.name} className="py-4 first:pt-0">
                  <p className="font-display text-lg font-semibold tracking-tight">
                    {item.name}
                  </p>
                  <p className="mt-1 text-small text-muted-on-night">{item.note}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionFrame>
  );
}
