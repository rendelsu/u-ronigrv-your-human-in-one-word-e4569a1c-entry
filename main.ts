import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// One word for the human: the boss who hands over the controls and disappears.
const entryWord = "autopilot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, entryWord, "utf8");
chmodSync(outputPath, 0o644);
