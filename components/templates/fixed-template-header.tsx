"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { InternalLink } from "@/config/types";
import { assetPath, routePath } from "@/lib/urls";

export function FixedTemplateHeader({ links }: { links: InternalLink[] }) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const all = [{ label: "Home", slug: "" }, ...links];
  return (
    <header className="top fpb-header">
      <div className="wrap top-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assetPath(siteConfig.assets.logo)} alt="" className="fpb-brand-logo" />
          <strong>FIRST PERSON BOXING</strong>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {all.map((item) => (
            <Link key={item.slug} href={routePath(item.slug)} aria-current={pathname.replace(/\/+$/, "") === routePath(item.slug).replace(/\/+$/, "") ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>
        <button className="fpb-mobile-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="fpb-mobile-nav" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav id="fpb-mobile-nav" className={"fpb-mobile-links " + (open ? "is-open" : "")} aria-label="Mobile navigation">
        {all.map((item) => (
          <Link key={item.slug} href={routePath(item.slug)} onClick={() => setOpen(false)}>{item.label}</Link>
        ))}
      </nav>
    </header>
  );
}
