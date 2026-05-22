import { promises as fs } from "fs";
import path from "path";
import os from "os";
import { format } from "date-fns";

const PRIMARY_FILE = path.join(process.cwd(), "data", "invoice-counter.json");
const FALLBACK_FILE = path.join(os.tmpdir(), "pbh-invoice-counter.json");

type CounterFile = {
  date: string;
  sequence: number;
};

async function tryRead(filePath: string): Promise<CounterFile | null> {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw);
    if (
      typeof parsed?.date === "string" &&
      typeof parsed?.sequence === "number" &&
      Number.isFinite(parsed.sequence)
    ) {
      return { date: parsed.date, sequence: parsed.sequence };
    }
    return null;
  } catch {
    return null;
  }
}

async function readCounter(): Promise<CounterFile | null> {
  return (await tryRead(PRIMARY_FILE)) ?? (await tryRead(FALLBACK_FILE));
}

async function writeCounter(counter: CounterFile): Promise<void> {
  const payload = JSON.stringify(counter, null, 2);
  try {
    await fs.mkdir(path.dirname(PRIMARY_FILE), { recursive: true });
    await fs.writeFile(PRIMARY_FILE, payload, "utf8");
    return;
  } catch {
    await fs.writeFile(FALLBACK_FILE, payload, "utf8");
  }
}

export async function generateInvoiceNumber(): Promise<string> {
  const now = new Date();
  const today = format(now, "yyyyMMdd");

  const existing = await readCounter();
  const nextSequence = existing && existing.date === today ? existing.sequence + 1 : 1;

  await writeCounter({ date: today, sequence: nextSequence });

  const padded = String(nextSequence).padStart(3, "0");
  return `INV-PBH-${today}-${padded}`;
}

export function getCurrentDate(): string {
  return format(new Date(), "dd MMMM yyyy");
}
