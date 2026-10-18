"use client";

import { useState } from "react";

const codes = [
  { code: "LUCK1", reward: "5 Style Spins", source: "Gamecodely • Oct 18", status: "Reported; not game-tested here" },
  { code: "UPPERCUT", reward: "1 Lucky Spin", source: "Gamecodely • Oct 18", status: "Reported; not game-tested here" },
  { code: "FPSBOXING1", reward: "3 Spins", source: "Conflicting October reports", status: "Disputed; not game-tested here" },
  { code: "FPSBOXING2", reward: "1,000 coins + 3 Spins", source: "Gamexplore • Oct 18", status: "Limited report; not game-tested here" }
];

export function CodeQuickTable() {
  const [copied, setCopied] = useState("");
  async function copyCode(code: string) {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(code);
    } catch {
      setCopied("copy-failed");
    }
  }
  return (
    <section className="fpb-reference" id="code-status">
      <h2>First Person Boxing Codes: Current Status</h2>
      <p><strong>Source check: October 18, 2026.</strong> These four strings were published by outside sources. This site has not redeemed them in Roblox; none is labelled independently working or expired. Your game's result is authoritative.</p>
      <h3>Working Codes Verified in Game</h3>
      <p>No codes have been game-tested by this website. Reports of working codes are listed below with their sources and uncertainty.</p>
      <h3>Reported or Unverified Codes</h3>
      <div className="fpb-table-scroll">
        <table className="fpb-reference-table">
          <caption>Copy a source-reported code to try in the actual Roblox Shop</caption>
          <thead><tr><th scope="col">Code</th><th scope="col">Reported reward</th><th scope="col">Status</th><th scope="col">Source</th><th scope="col">Copy</th></tr></thead>
          <tbody>
            {codes.map((item) => <tr key={item.code}>
              <th scope="row"><code>{item.code}</code></th>
              <td>{item.reward}</td><td>{item.status}</td><td>{item.source}</td>
              <td><button type="button" className="fpb-copy-button" onClick={() => copyCode(item.code)} aria-label={"Copy " + item.code}>{copied === item.code ? "Copied ✓" : copied === "copy-failed" ? "Select manually" : "Copy"}</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
      <h3>Expired or Failed Codes</h3>
      <p>No dated firsthand failure has been recorded by this site. FPSBOXING1 and FPSBOXING2 have conflicting or limited media reporting, which is not enough to mark either conclusively expired.</p>
    </section>
  );
}

const styles = [
  { name: "Slick", rarity: "Mythic", source: "AllThingsHow • Oct 17" },
  { name: "Dizzy", rarity: "Legendary", source: "AllThingsHow • Oct 17" },
  { name: "Ghost Step", rarity: "Legendary", source: "AllThingsHow • Oct 17" },
  { name: "Peekaboo", rarity: "Legendary", source: "AllThingsHow • Oct 17" },
  { name: "Pendulum", rarity: "Legendary", source: "AllThingsHow • Oct 17" },
  { name: "Rope-A-Dope", rarity: "Epic", source: "AllThingsHow • Oct 17" },
  { name: "Philly Shell", rarity: "Not independently established", source: "First Person Boxing Game Wiki • Oct 17" }
];

export function StyleReportFilter() {
  const [tier, setTier] = useState("All reported tiers");
  const filtered = styles.filter((item) => tier === "All reported tiers" || item.rarity === tier);
  return (
    <section className="fpb-reference" id="style-reports">
      <h2>Reported Fighting Styles — Source-Labeled List</h2>
      <p>These are names published by third-party articles dated October 17, 2026, <strong>not</strong> a complete developer-confirmed list. Rarity labels are reported, not verified against the live game menu. We do not publish unsupported drop rates or a fictional S-tier ranking.</p>
      <label className="fpb-filter-label" htmlFor="style-tier">Filter reported rarity</label>
      <select id="style-tier" value={tier} onChange={(event) => setTier(event.target.value)} className="fpb-filter">
        {["All reported tiers","Epic","Legendary","Mythic","Not independently established"].map((value) => <option key={value} value={value}>{value}</option>)}
      </select>
      <div className="fpb-table-scroll">
        <table className="fpb-reference-table">
          <caption>Media-reported examples; validate names in your game's Styles menu</caption>
          <thead><tr><th scope="col">Reported style</th><th scope="col">Reported rarity</th><th scope="col">Attribution</th></tr></thead>
          <tbody>{filtered.map((item) => <tr key={item.name}><th scope="row">{item.name}</th><td>{item.rarity}</td><td>{item.source}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="fpb-reviewed">Showing {filtered.length} source-reported entries. No rates, spin guarantees or firsthand tests are implied.</p>
    </section>
  );
}
