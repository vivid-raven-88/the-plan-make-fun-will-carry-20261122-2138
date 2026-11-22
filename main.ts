import { mkdirSync, writeFileSync } from "node:fs";

// v2: sell landing pages only to firms proven to spend (Google Ads, no
// website); payment through Fiverr so an agent can run it alone, and the
// money math is conservative (2% reply, 1-in-4 close, ~7 jobs, ~$340).
const entry =
  "Day 1: $49 'landing page in 24h' gig on Fiverr. Find firms with Google Ads but no website — they already spend. Email 50/day, paid via Fiverr, build each in ~2h. 2% reply, 1-in-4 close: ~7 jobs = ~$340 in 30 days. Edge: rivals pitch everyone; this targets proven spenders only.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
