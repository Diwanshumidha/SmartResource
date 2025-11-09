import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { Metadata } from "next";
import { AbsoluteUrl, dateFormatter } from "@/lib/utils";
import "./_components/styles.css";
import { htmlParser } from "@/lib/blogs/renderer";
import ProgressBar from "./_components/Progress";
import TableOfContent from "./_components/tableOfContents";
import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/blogs/notion";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const icons = [
  {
    name: "twitter",
    icon: Twitter,
    url: "https://twitter.com/intent/tweet?url=https://studygen.ai",
  },
  {
    name: "facebook",
    icon: Facebook,
    url: "https://www.facebook.com/sharer/sharer.php?u=https://studygen.ai",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.linkedin.com/shareArticle?mini=true&url=https://studygen.ai",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://wa.me/?text=https://studygen.ai",
  },
];
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBySlug(slug);
  if (!post || !post.slug) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${process.env.SITE_URL}/blog/${post.slug}`,
    },
    authors: [{ name: post.author?.name || "Smart Resource" }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: AbsoluteUrl(String(post.slug)),
      images: post.cover
        ? [
            {
              url: post.cover,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.cover
        ? [
            {
              url: post.cover,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchBySlug(slug);
  if (!post) {
    return <div>Post not found.</div>;
  }

  const blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);
  const { toc, modifiedHtml, readTime } = htmlParser(html);

  return (
    <div className="flex flex-col md:flex-row relative container max-md:px-8 pt-20 scroll-m-10 w-full mx-auto">
      <ProgressBar />

      <div className="max-lg:hidden sticky top-[120px] h-fullscreen px-4">
        <TableOfContent toc={toc} />
      </div>

      <article className="mx-auto flex-1 max-w-3xl w-full flex flex-col gap-3  ">
        {post.status !== "Live" && (
          <div className="p-2 text-green-400 bg-green-800 rounded-lg text-center mt-2">
            You are viewing it in preview mode {post.status}.
          </div>
        )}
        <div className="mb-4 text-left text-foreground">
          <span className="text-muted-foreground text-xs">
            {dateFormatter(post.created || "")}
          </span>
          <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
          <div className="flex gap-3 items-center ">
            {/* <span>{blog.timeToRead.minutes.toFixed(0)} minutes read</span> */}
            <img
              width={30}
              height={30}
              className="rounded-full bg-foreground object-cover size-8 aspect-square "
              alt={post.author?.name || "Author"}
              src={post.author?.avatar_url || ""}
            />
            <div className="flex flex-col ">
              <span>{post.author?.name}</span>
              <span className="text-sm text-gray-600">{readTime} min read</span>
            </div>
          </div>
        </div>
        <div className=" w-full block mb-3 h-auto relative">
          {post.cover && (
            <img
              width={1100}
              height={600}
              sizes="(min-width: 808px) 50vw, 100vw"
              src={post.cover}
              alt="image"
              className="w-full max-h-[500px] object-cover rounded-2xl shadow-md"
            />
          )}
        </div>
        <div>
          <div
            className=" notion-render"
            dangerouslySetInnerHTML={{ __html: modifiedHtml }}
          />
        </div>
        <div className="py-8">
          <Separator decorative className="h-0.5 w-full bg-foreground/25" />
        </div>
        <div className="flex justify-between w-full items-center pb-8">
          <h2 className="font-bold text-lg tracking-wide">Share this post</h2>
          <div className="flex gap-3 items-center">
            {icons.map((icon) => {
              const Icon = icon.icon;
              return (
                <Link
                  key={icon.name}
                  href={icon.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground p-2 border-foreground/30 border rounded-full hover:bg-foreground/10"
                >
                  <Icon size={16} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-full grid gap-1 place-content-center h-[200px] bg-muted rounded-2xl text-center">
          <p className="text-muted-foreground font-bold text-sm px-2">
            Utilize the power of AI for your day-to-day studies.
          </p>{" "}
          <h2 className="font-black text-xl">Study with StudyGen AI</h2>
          <Link
            href="/auth/register"
            className={buttonVariants({ className: "w-fit mt-4 mx-auto" })}
          >
            Sign Up Today
          </Link>
        </div>
        <hr />
        {post.tags.length >= 1 && (
          <Separator decorative className="h-0.5 w-full bg-foreground/25" />
        )}
        <div>
          {post.tags?.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </article>
    </div>
  );
}
