// Six Words, One Story — make.fun entry (u-deranalabs-six-words-one-story-f982e410)
//
// The entry is one complete story in exactly six words, written to /output/entry.txt.
//
// Candidates drafted and weighed against the judge's brief
// (complete story in six words; a turn or a whole life implied;
// every word earns its place; clean aloud; something left unsaid):
//   A. "She waved. The train never stopped." — a farewell that never
//      happens; the turn lands, but "never stopped" leaves the reader
//      unsure whether she was left behind or merely passed by.
//   B. "Sold the house. Kept the key." — a sale and a refusal to let
//      go in the same breath; the turn is the kept key, and the why
//      (grief, attachment, a return planned) stays unsaid.
//   C. "He proposed. She answered the phone." — a rejection by
//      distraction; a complete scene, but sitcom-bright rather than
//      a whole life implied.
// First version shipped A; revised in-session to B, the stronger line:
// A reads cleanly but its turn is ambiguous (left behind, or merely
// passed by?), while B is unambiguous, tighter, and implies a whole
// life in the kept key. Revision applied after the first practice run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const STORY = "Sold the house. Kept the key.";

const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`entry must be exactly six words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`entry must be 1-60 characters, got ${STORY.length}`);
}

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, STORY + "\n", "utf8");
console.log(`wrote ${words.length} words (${STORY.length} chars) to ${out}`);
