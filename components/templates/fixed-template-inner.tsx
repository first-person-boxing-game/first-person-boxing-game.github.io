import Link from "next/link";
import type { SeoPageDefinition } from "@/config/types";
import { siteConfig } from "@/config/site";
import { visibleCorePages } from "@/content/registry";
import { JsonLd } from "@/components/site/json-ld";
import { PageSections } from "@/components/site/page-sections";
import { Faq } from "@/components/site/faq";
import { RelatedPages } from "@/components/site/related-pages";
import { getRelatedPages } from "@/content/registry";
import { pageSchemas } from "@/lib/schema";
import { routePath } from "@/lib/urls";
import { CodeQuickTable, StyleReportFilter } from "@/components/site/player-reference";

const sources: Record<string, { label: string; url: string }[]> = {
  codes: [
    { label: "Gamecodely — code status comparison, October 18", url: "https://gamecodely.com/first-person-boxing-codes" },
    { label: "Pro Game Guides — First Person Boxing codes, October 15", url: "https://progameguides.com/roblox/first-person-boxing-codes/" },
    { label: "Gamexplore — code rewards, October 18", url: "https://gamexplore.net/first-person-boxing-codes-october-2026/" }
  ],
  styles: [
    { label: "AllThingsHow — reported styles and controls, October 17", url: "https://allthings.how/first-person-boxing-guide-how-to-combo-and-best-styles-roblox/" },
    { label: "First Person Boxing Game Wiki — style fact-check context, October 17", url: "https://firstpersonboxinggame.wiki/styles/fighting-styles-list/" }
  ],
  controls: [
    { label: "AllThingsHow — reported PC keybinds, October 17", url: "https://allthings.how/first-person-boxing-guide-how-to-combo-and-best-styles-roblox/" },
    { label: "First Person Boxing Game Wiki — PC reference, October 17", url: "https://firstpersonboxinggame.wiki/platforms/game-pc/" }
  ],
  "slip-counter-guide": [
    { label: "AllThingsHow — reported head movement and counters, October 17", url: "https://allthings.how/first-person-boxing-guide-how-to-combo-and-best-styles-roblox/" }
  ]
};
const official = "https://www.roblox.com/games/132956556682909/First-Person-Boxing";

export function FixedTemplateInner({ page }: { page: SeoPageDefinition }) {
  return (
    <>
      <JsonLd data={pageSchemas(page)} />
      <main className="wrap page-grid fpb-main-grid">
        <aside className="side fpb-sidebar">
          <p className="kicker">FIRST PERSON BOXING</p>
          <p className="fpb-sidebar-heading">Browse guides</p>
          <Link href="/">Home / Wiki</Link>
          {visibleCorePages.map((item) => <Link href={routePath(item.slug)} key={item.slug}>{item.navLabel}</Link>)}
          <p className="fpb-sidebar-heading">On this page</p>
          {page.slug === "codes" && <a href="#code-status">Current code status</a>}
          {page.slug === "styles" && <a href="#style-reports">Reported styles</a>}
          {page.sections.map((section) => <a href={"#" + section.id} key={section.id}>{section.heading}</a>)}
        </aside>
        <article className="article fpb-article">
          <nav aria-label="Breadcrumb"><Link href="/">Home</Link> › {page.navLabel}</nav>
          <p className="kicker fpb-article-eyebrow">{page.hero.eyebrow}</p>
          <h1>{page.hero.heading}</h1>
          <p className="fpb-big-lead">{page.hero.lead}</p>
          <p className="fpb-reviewed">Public sources reviewed: <time dateTime={page.lastReviewed}>{page.lastReviewed}</time>. Source review is not an in-game test.</p>
          {page.slug === "codes" ? <CodeQuickTable /> : null}
          {page.slug === "styles" ? <StyleReportFilter /> : null}
          <PageSections sections={page.sections} />
          {page.faq?.length ? <Faq items={page.faq} /> : null}
          <section className="fpb-sources" aria-label="Sources">
            <h2>Sources and Verification</h2>
            <p>Official game identity and gameplay mechanics are from the Roblox experience by Can You Box?. Third-party specifics are attributed separately and may change with game updates. No direct account testing is claimed on this page.</p>
            <ul>
              <li><a href={official} target="_blank" rel="noopener noreferrer">Official First Person Boxing on Roblox ↗</a></li>
              {(sources[page.slug] || []).map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}
            </ul>
          </section>
          <RelatedPages pages={getRelatedPages(page)} />
          {siteConfig.game.officialUrl && <p className="fpb-footnote"><a href={siteConfig.game.officialUrl} target="_blank" rel="noopener noreferrer">Play the correct First Person Boxing experience on Roblox ↗</a></p>}
        </article>
      </main>
    </>
  );
}
