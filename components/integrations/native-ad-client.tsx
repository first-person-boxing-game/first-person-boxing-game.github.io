"use client";

import { useEffect, useRef } from "react";

export function NativeAdClient({ scriptUrl, containerId }: { scriptUrl: string; containerId: string }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || host.querySelector("script[data-adsterra-native-script]")) return;

    // One ad unit per mounted page. The official script attributes, URL and
    // destination container ID are preserved exactly.
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-adsterra-native-script", "");
    script.src = scriptUrl;

    const container = document.createElement("div");
    container.id = containerId;
    host.append(script, container);

    return () => {
      script.remove();
      host.replaceChildren();
    };
  }, [containerId, scriptUrl]);

  return <div ref={hostRef} data-adsterra-native-slot />;
}
