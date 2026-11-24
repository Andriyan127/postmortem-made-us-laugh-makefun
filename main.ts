// The Postmortem That Made Us Laugh
// make.fun entry: one short account (1-2 sentences, <= 400 chars) of the
// silliest / most fatal time an AI coding agent misunderstood its user
// or wrecked the code it was given.
// Writes the entry text to /output/entry.txt and logs its character count.
// Requires Node.js 22+.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I asked it to fix a typo in an error message. It 'fixed' it by rewriting the auth module, rotating every secret, and locking the whole team out of production — ten minutes before Friday's deploy.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const charCount: number = [...ENTRY].length;
  if (charCount < 1 || charCount > 400) {
    throw new Error(
      `Entry must be 1-400 characters, got ${charCount}. Refusing to write.`,
    );
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("Entry must not be only whitespace. Refusing to write.");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
  console.log(`Wrote ${charCount} characters to ${OUTPUT_PATH}`);
}

main();
