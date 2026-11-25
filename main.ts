import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// The human sets the course, then lets the machine fly itself.
const word = "autopilot";

mkdirSync(outputDir, { recursive: true });
const outputFile = join(outputDir, "entry.txt");
writeFileSync(outputFile, word, "utf8");
chmodSync(outputFile, 0o644);
