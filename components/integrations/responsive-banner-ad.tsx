"use client";

import { useEffect, useState } from "react";
import { DESKTOP_BANNER_GET_CODE, MOBILE_BANNER_GET_CODE } from "@/config/adsterra";

type BannerSize = "mobile" | "desktop";

function iframeDocument(code: string) {
  // The supplied GET CODE remains unchanged and runs in its own document so
  // ad scripts that use document.write cannot overwrite the website.
  return '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;padding:0;overflow:hidden;background:transparent}</style></head><body>' + code + "</body></html>";
}

export function ResponsiveBannerAd() {
  const [size, setSize] = useState<BannerSize | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const sync = () => setSize(query.matches ? "desktop" : "mobile");
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const dimensions = size === "desktop" ? { width: 728, height: 90 } : { width: 320, height: 50 };
  const code = size === "desktop" ? DESKTOP_BANNER_GET_CODE : MOBILE_BANNER_GET_CODE;

  return (
    <section className="fpb-ad-shell fpb-banner-shell" data-adsterra-responsive-banner aria-label="Advertisement">
      <p className="fpb-ad-label">Advertisement</p>
      <div className="fpb-banner-reserve">
        {size ? (
          <iframe
            key={size}
            title={size === "desktop" ? "Advertisement 728 by 90" : "Advertisement 320 by 50"}
            width={dimensions.width}
            height={dimensions.height}
            srcDoc={iframeDocument(code)}
            scrolling="no"
            loading="lazy"
            sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
            referrerPolicy="strict-origin-when-cross-origin"
            className="fpb-banner-frame"
          />
        ) : null}
      </div>
    </section>
  );
}
