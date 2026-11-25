// Fridge Roast: One Line, Biggest Laugh — make.fun bounty.
// Writes a single roast line (<= 200 chars) to entry.txt in the output dir.
import { mkdirSync, writeFileSync } from "node:fs";
import { existsSync } from "node:fs";
import { join } from "node:path";

const line =
  "My fridge's camera flagged my midnight snack as suspicious activity and locked the ice dispenser until I passed a CAPTCHA with my own face.";

const outDir = process.argv[2] ?? (existsSync("/output") ? "/output" : "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
