import Script from "next/script";
import { SOCIAL_BAR_SCRIPT_URL } from "@/config/adsterra";

/** Mounted only in the persistent root layout; Next Script deduplicates by id. */
export function SocialBarAd() {
  return (
    <Script
      id="fpb-adsterra-social-bar"
      data-cfasync="false"
      src={SOCIAL_BAR_SCRIPT_URL}
      strategy="afterInteractive"
    />
  );
}
