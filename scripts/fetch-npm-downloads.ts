import { writeFileSync } from 'fs';
import { resolve } from 'path';

type DownloadEntry = {
  downloads: number;
  day: string;
};

type NpmDownloadsResponse = {
  start: string;
  end: string;
  package: string;
  downloads: DownloadEntry[];
};

const res = await fetch('https://api.npmjs.org/downloads/range/last-year/chart2music');
const json: NpmDownloadsResponse = await res.json();

const outPath = resolve(import.meta.dirname, '../src/assets/chart2music-npm-downloads.json');
writeFileSync(outPath, JSON.stringify(json, null, 2));

console.log(`Saved ${json.downloads.length} entries to ${outPath}`);
