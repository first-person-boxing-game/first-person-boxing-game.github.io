import { integrations } from "@/config/integrations";
import { NativeAdClient } from "./native-ad-client";

/** One explicitly placed native slot per page; not injected from the layout. */
export function NativeAdSlot() {
  if (integrations.ads.provider !== "adsterra-native") return null;

  return (
    <section className="fpb-ad-shell fpb-native-shell" aria-label="Advertisement">
      <p className="fpb-ad-label">Advertisement</p>
      <NativeAdClient
        scriptUrl={integrations.ads.scriptUrl}
        containerId={integrations.ads.containerId}
      />
    </section>
  );
}
