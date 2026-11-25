import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";
// One word for the human: the boss who hands over the controls and disappears.
const word = "autopilot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, word, "utf8");
chmodSync(outPath, 0o644);
