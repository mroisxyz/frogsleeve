import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// hello again, trio: this sleeve note goes into the configured output folder.
// Resolve our own directory from this module's URL; never rely on cwd.
const here = fileURLToPath(new URL('.', import.meta.url));

// This batch lands in MAKEFUN_OUTPUT_DIR, or /output when that env var is unset.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Keep the orders clear: one album title, then the back-cover blurb.
const entry = 'Ribbit at Dawn — Three frogs, one upright bass, a brush kit made from lily pads. They take the ballad slow, and the pond holds still. Recorded live in a drainpipe; no overdubs, no second takes.';

// Report the byte count once, then clear the bar and let the pond hold still.
function logSize(bytes: number): void {
  console.log(`entry.txt: ${bytes} bytes`);
}

mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.txt');
writeFileSync(target, entry, 'utf8');
logSize(Buffer.byteLength(entry, 'utf8'));
