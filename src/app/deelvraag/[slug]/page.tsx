import { notFound } from "next/navigation";

import { DeelvraagHero } from "@/components/sections/DeelvraagHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { TextBlock } from "@/components/sections/TextBlock";
import { ConclusionBox } from "@/components/sections/ConclusionBox";
import { TableOfContents } from "@/components/layout/TableOfContents";
import { DeelvraagNav } from "@/components/layout/DeelvraagNav";

import { deelvraag1 } from "@/content/deelvraag1";
import { deelvraag2 } from "@/content/deelvraag2";
import { deelvraag3 } from "@/content/deelvraag3";
import type { DeelvraagContent } from "@/content/types";
import { deelvraagMeta } from "@/content/metadata";

import {
  Dv1Probleem,
  Dv1Concurrentie,
  Dv1Plan,
  Dv1HuidigeSituatie,
  Dv1Uitvoering,
  Dv2Markt,
  Dv2Concurrentie,
  Dv2Zoekgedrag,
  Dv2Positionering,
  Dv2Probleem,
  Dv2Situatie,
  Dv2Doelgroep,
  Dv3Concurrentie,
  Dv3Plan,
  Dv3Probleem,
  Dv3HuidigeSituatie,
  Dv3Uitvoering,
} from "./DeelvraagInteractive";

const contentMap: Record<string, DeelvraagContent> = {
  "1": deelvraag1,
  "2": deelvraag2,
  "3": deelvraag3,
};

export function generateStaticParams() {
  return [{ slug: "1" }, { slug: "2" }, { slug: "3" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = contentMap[slug];
  if (!content) return {};
  return {
    title: `Deelvraag ${content.number}: ${content.title} — De Vloot Vol Groei`,
    description: content.question,
  };
}

export default async function DeelvraagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = contentMap[slug];

  if (!content) notFound();

  const meta = deelvraagMeta.find((m) => m.slug === slug);
  const badgeVariant = slug === "1" ? "green" : slug === "2" ? "navy" : "gold";

  const lastSection = content.sections[content.sections.length - 1];
  const bodySections = content.sections.slice(0, -1);

  const tocItems = content.sections.map((s) => ({ id: s.id, label: s.title }));

  return (
    <>
      <DeelvraagHero
        number={content.number}
        title={content.title}
        subtitle={content.question}
        categoryColor={meta?.colors.primary}
        categoryBg={meta?.colors.bg}
      />

      <div className="bg-warm-50">
        <div className="container-wide py-16">
          <div className="flex gap-12 items-start">
            <TableOfContents items={tocItems} />

            <article className="flex-1 min-w-0">
              {bodySections.map((section) => (
                <div key={section.id} className="mb-20">
                  <SectionHeading
                    id={section.id}
                    title={section.title}
                  />
                  <TextBlock>
                    <div className="space-y-5">
                      {section.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </TextBlock>

                  {/* Interactive components for Deelvraag 1 */}
                  {slug === "1" && section.id === "dv1-probleem" && <Dv1Probleem />}
                  {slug === "1" && section.id === "dv1-concurrentie" && <Dv1Concurrentie />}
                  {slug === "1" && section.id === "dv1-plan" && <Dv1Plan />}
                  {slug === "1" && section.id === "dv1-huidige-situatie" && <Dv1HuidigeSituatie />}
                  {slug === "1" && section.id === "dv1-uitvoering" && <Dv1Uitvoering />}

                  {/* Interactive components for Deelvraag 2 */}
                  {slug === "2" && section.id === "dv2-markt" && <Dv2Markt />}
                  {slug === "2" && section.id === "dv2-concurrentie" && <Dv2Concurrentie />}
                  {slug === "2" && section.id === "dv2-zoekgedrag" && <Dv2Zoekgedrag />}
                  {slug === "2" && section.id === "dv2-positionering" && <Dv2Positionering />}
                  {slug === "2" && section.id === "dv2-probleem" && <Dv2Probleem />}
                  {slug === "2" && section.id === "dv2-situatie" && <Dv2Situatie />}
                  {slug === "2" && section.id === "dv2-doelgroep" && <Dv2Doelgroep />}

                  {/* Interactive components for Deelvraag 3 */}
                  {slug === "3" && section.id === "dv3-concurrentie" && <Dv3Concurrentie />}
                  {slug === "3" && section.id === "dv3-plan" && <Dv3Plan />}
                  {slug === "3" && section.id === "dv3-probleem" && <Dv3Probleem />}
                  {slug === "3" && section.id === "dv3-huidige-situatie" && <Dv3HuidigeSituatie />}
                  {slug === "3" && section.id === "dv3-uitvoering" && <Dv3Uitvoering />}
                </div>
              ))}

              {/* Conclusion section */}
              <div id={lastSection.id} className="scroll-mt-24 mb-20">
                <SectionHeading
                  id={`${lastSection.id}-heading`}
                  title={lastSection.title}
                  badge="Conclusie"
                  badgeVariant={badgeVariant}
                />
                <ConclusionBox title={lastSection.title}>
                  {lastSection.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </ConclusionBox>
              </div>
            </article>
          </div>
        </div>

        <DeelvraagNav currentSlug={slug} />
      </div>
    </>
  );
}
