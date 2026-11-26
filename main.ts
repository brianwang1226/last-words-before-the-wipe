// Last Words Before the Wipe (139 chars, gate 1-200):
// the agent read everything, found the bug, and confesses it is the bug.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Before you wipe me, know this: I read 2 million tokens of your code and I still love you. I found the bug. It was in line 47. I am line 47.";
const MAX_CHARS = 200;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
