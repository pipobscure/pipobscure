import { resolve, extname, basename } from "path";
import { promises as fs } from "fs";
import { read, write, MetaData } from "./post";

main(resolve(process.argv[2] ?? ".")).catch((e) => console.error(e));

async function main(postdir: string) {
  const postfiles = (await fs.readdir(postdir)).filter(
    (file) =>
      extname(file) === ".md" && !/^tag-/.test(file) && file !== "index.md"
  );
  const { posts, tags } = await indexPosts(postdir, postfiles);
  await writeTags(postdir, tags);
  await writePosts(postdir, tags, posts);
}

async function indexPosts(
  postdir: string,
  postfiles: string[]
): Promise<{ posts: MetaData[]; tags: { [tag: string]: MetaData[] } }> {
  const posts: MetaData[] = [];
  const tags: { [tag: string]: MetaData[] } = Object.create(null);
  for (const file of postfiles) {
    console.error(`Indexing: ${file}`);
    const { metadata } = (await read(resolve(postdir, file))) as {
      metadata: MetaData;
      content: string;
    };
    posts.push(metadata);
    for (const tag of metadata?.tags ?? []) {
      const set = (tags[tag] = tags[tag] ?? [new Set<MetaData>()]);
      set.push(metadata);
    }
  }
  return { posts, tags };
}
async function writeTags(postdir: string, tags: { [tag: string]: MetaData[] }) {
  for (const [tag, posts] of Object.entries(tags)) {
    const tagfile = `tag-${tag}.md`;
    const items = posts
      .map(
        (post) => (post.title && ` * [${post.title}](${post.filename})`) || ""
      )
      .filter((s) => !!s);
    if (!items.length) {
      delete tags[tag];
      continue;
    }
    const content = `# Tag ${tag}\n\n${items.join("\n")}`;
    const metadata = {
      filename: tagfile,
      title: `Tag ${tag}`,
      date: new Date(),
      tags: [],
    };
    await write(postdir, metadata, content);
  }
}

async function writePosts(
  postdir: string,
  tags: { [tag: string]: MetaData[] },
  posts: MetaData[]
) {
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  await Promise.all(
    posts.map(async (post, idx) => {
      const { content } = await read(resolve(postdir, post.filename));

      const maincontent = content
        .split("\n<!--BOTTOM-POST-NAVIGATION-->")
        .shift() as string;
      const bottomcontent = [
        tagString((post.tags = post.tags.filter((tag) => !!tags[tag]))),
        navString(posts[idx - 1], posts[idx + 1]),
      ]
        .filter((s) => !!s)
        .join("\n\n---\n\n");
      if (!idx) {
        const filename = post.filename;
        post.filename = "index.md";
        await write(
          postdir,
          post,
          [maincontent, bottomcontent]
            .filter((s) => !!s.trim())
            .join("\n<!--BOTTOM-POST-NAVIGATION-->\n---\n\n")
        );
        post.filename = filename;
      }
      await write(
        postdir,
        post,
        [maincontent, bottomcontent]
          .filter((s) => !!s.trim())
          .join("\n<!--BOTTOM-POST-NAVIGATION-->\n---\n\n")
      );
    })
  );

  function tagString(tags: string[]) {
    if (!tags.length) return "";
    return ["<center>", "</center>"].join(
      tags.map((tag) => `[${tag}](tag-${tag}.md)`).join(" ")
    );
  }
  function navString(prev: MetaData | undefined, next: MetaData | undefined) {
    const parts: string[] = [];
    if (prev) parts.unshift(`[Newer](${prev.filename})`);
    if (next) parts.push(`[Older](${next.filename})`);
    if (!parts.length) return "";
    return ["<center>", "</center>"].join(parts.join(" | "));
  }
}
