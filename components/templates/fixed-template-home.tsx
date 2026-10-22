import { ResponsiveBannerAd } from "@/components/integrations/responsive-banner-ad";
import { NativeAdSlot } from "@/components/integrations/native-ad-slot";
import Link from "next/link";
import type { HomePageDefinition } from "@/config/types";
import { siteConfig } from "@/config/site";
import { visibleCorePages } from "@/content/registry";
import { JsonLd } from "@/components/site/json-ld";
import { PageSections } from "@/components/site/page-sections";
import { Faq } from "@/components/site/faq";
import { homeSchemas } from "@/lib/schema";
import { assetPath, routePath } from "@/lib/urls";

export function FixedTemplateHome({ home }: { home: HomePageDefinition }) {
  return (
    <>
      <JsonLd data={homeSchemas(home)} />
      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="fpb-hero-copy">
              <p className="kicker">{home.hero.eyebrow}</p>
              <h1>{home.hero.heading}</h1>
              <div className="goldline" />
              <p className="fpb-big-lead">{home.hero.lead}</p>
              <p>{home.hero.supportingText}</p>
              <div className="fpb-actions">
                {siteConfig.game.officialUrl && <a className="fpb-primary-cta" href={siteConfig.game.officialUrl} rel="noopener noreferrer" target="_blank">Play on Roblox ↗</a>}
                <Link className="fpb-secondary-cta" href="/codes/">View Codes</Link>
              </div>
              <p className="fpb-identity">ROBLOX · BY CAN YOU BOX? · PC / MOBILE / CONSOLE</p>
            </div>
            <div className="cover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="fpb-cover-image" src={assetPath(siteConfig.assets.cover)} alt="First Person Boxing Roblox game cover" />
            </div>
          </div>
        </section>
        <div className="wrap"><ResponsiveBannerAd /></div>
        <div className="wrap fpb-quick-grid" aria-label="Find a guide">
          {visibleCorePages.map((page) => (
            <Link key={page.slug} className="fpb-quick-card" href={routePath(page.slug)}>
              <span className="fpb-card-kicker">GUIDE</span>
              <strong>{page.navLabel}</strong>
              <small>{page.description}</small>
              <span>Read guide →</span>
            </Link>
          ))}
        </div>
        <div className="wrap"><NativeAdSlot /></div>
        <div className="wrap page-grid fpb-main-grid">
          <aside className="side">
            <h2>Verified Game Identity</h2>
            <dl className="fpb-facts">
              <dt>Experience</dt><dd>First Person Boxing</dd>
              <dt>Creator</dt><dd>Can You Box?</dd>
              <dt>Platform</dt><dd>Roblox</dd>
              <dt>Place ID</dt><dd>132956556682909</dd>
              <dt>Supports</dt><dd>PC, Mobile, Console</dd>
              <dt>Source reviewed</dt><dd>October 18, 2026</dd>
            </dl>
            {siteConfig.game.officialUrl && <a href={siteConfig.game.officialUrl} target="_blank" rel="noopener noreferrer">Official game ↗</a>}
          </aside>
          <article className="article fpb-article">
            <PageSections sections={home.sections} />
            <Faq items={home.faq} />
          </article>
        </div>
      </main>
    </>
  );
}
