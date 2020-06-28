import { promises as fs } from "fs";
import { basename, resolve } from "path";

export interface MetaData {
  filename: string;
  title: string;
  date: Date;
  tags: string[];
}
export async function read(
  filename: string
): Promise<{ metadata: MetaData; content: string }> {
  const text = await fs.readFile(filename, "utf-8");
  const parts = text.split("-->");
  if (parts.length < 2)
    return {
      metadata: {
        filename: basename(filename),
        title: "",
        date: new Date(),
        tags: [],
      },
      content: text,
    };
  const content = parts.slice(1).join("-->");
  const sub = parts.shift()?.split("<!--") ?? [];
  if (sub?.shift()?.trim())
    return {
      metadata: {
        filename: basename(filename),
        title: "",
        date: new Date(),
        tags: [],
      },
      content: text,
    };
  if (!sub || sub?.length !== 1)
    return {
      metadata: {
        filename: basename(filename),
        title: "",
        date: new Date(),
        tags: [],
      },
      content: text,
    };

  const metadata: MetaData = {
    filename: basename(filename),
    title: "",
    date: new Date(),
    tags: [],
  };

  try {
    const lines = sub
      .shift()
      ?.split(/\r?\n/)
      .map((s) => decode(s.trim()))
      .filter((s) => !!s);
    for (const line of lines ?? []) {
      const [key, value = ""] = line.split(/\s*:\s*/).map((s) => s.trim());
      switch (key) {
        case "title":
          metadata.title = decode(value);
          break;
        case "date":
          metadata.date = new Date(Date.parse(value));
          break;
        case "tags":
          try {
            metadata.tags = Array.from(new Set(value.split(/\s*,\s*/)));
          } catch (e) {
            console.error(e, value);
            metadata.tags = [];
          }
          metadata.tags = metadata.tags
            .map((s) => s.replace(/[^a-z0-0]/gi, "").trim())
            .filter((s) => !!s);
          break;
        default:
          throw new Error(`invalid meta-data item: ${key}`);
      }
    }
  } catch (err) {
    console.error(err);
    return {
      metadata: {
        filename: basename(filename),
        title: "",
        date: new Date(),
        tags: [],
      },
      content: text,
    };
  }

  return { metadata, content };
}
export async function write(
  postdir: string,
  metadata: MetaData,
  content: string
) {
  const text = `${metadataString(metadata)}${content}`;
  console.error(`Writing: ${resolve(postdir, metadata.filename)}`);
  await fs.writeFile(resolve(postdir, metadata.filename), text);
}

function metadataString(metadata: MetaData): string {
  let title: string, date: Date | string, tags: string[];
  ({ title, date, tags } = metadata);
  try {
    date = date.toISOString();
  } catch (e) {
    date = new Date().toISOString();
  }
  tags = tags.map((s) => `${s}`.trim().toLowerCase()).filter((s) => !!s);
  return (
    `<!--
  title: ${encode(title)}
  date: ${encode(date)}
  tags: ${encode(tags.join(", "))}
  -->`
      .split(/\r?\n/)
      .map((s) => s.trim())
      .join("\n") + "\n"
  );
}
import { AllHtmlEntities } from "html-entities";
const ent = new AllHtmlEntities();
function encode(text: string): string {
  return text
    .split(/\r?\n/)
    .map((line) => ent.encode(line))
    .join("&#10;");
}
function decode(text: string): string {
  return ent.decode(text);
}
