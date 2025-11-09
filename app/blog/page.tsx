import { fetchAllPages } from "@/lib/blogs/notion";
import BlogCard from "./_components/blog-card";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";
import { UserAvatar } from "@/components/ui/avatar";
import { dateFormatter } from "@/lib/utils";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest news and updates from Smart Resource AI.",
  alternates: {
    canonical: `${process.env.SITE_URL}/blog`,
  },
};

export const dynamic = "force-dynamic";
const Blog = async () => {
  const posts = await fetchAllPages();
  console.log("posts on the server console log");
  return (
    <section className="pt-24 md:px-16 px-5 max-w-7xl grid gap-6 mx-auto space-y-6">
      <div className="space-y-1">
        <Badge className="bg-primary/40 hover:bg-primary/40 text-primary backdrop:blur-md tracking-wide">
          Read Our Blog
        </Badge>
        <h2 className="text-4xl font-bold pb-4">Browse Our Resources</h2>
        <p className="text-foreground/80">
          We provide the best content when it comes to modern day professional
          tools and resources.
        </p>
      </div>
      <Link href={`/blog/${posts[0].slug}`}>
        <div className="w-full h-[600px] relative rounded-2xl overflow-hidden group">
          <img
            src={posts[0].cover}
            alt={posts[0].title}
            fetchPriority="high"
            className="w-full object-cover object-center h-full rounded-2xl shadow-md"
          />
          <div className="absolute space-y-5 min-h-[20%] p-5 bg-black/40 backdrop-blur-lg w-full bottom-0">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-bold capitalize text-md text-white">
                  {posts[0].title}
                </h2>
                <p className="text-white/80">
                  {posts[0].description.slice(0, 100)}...
                </p>
              </div>
              <div>
                <ArrowRightIcon className="h-6 w-6 text-white/80 group-hover:text-primary" />
              </div>
            </div>
            <div className="justify-between flex flex-col sm:flex-row gap-4 sm:gap-0 items-center">
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <UserAvatar
                    ProfileSrc={posts[0].author?.avatar_url || ""}
                    name={posts[0].author?.name || ""}
                    alt="author profile"
                    className="size-[26px] rounded-full self-center"
                  />
                  <p className="text-sm text-white/80">
                    {posts[0].author?.name}
                  </p>
                </div>
                <div className="flex items-center text-white/80 gap-2">
                  <div className="rounded-full p-1.5 border-white/80 border">
                    <CalendarIcon className="h-3 w-3" />
                  </div>
                  <p className="text-sm">
                    {dateFormatter(posts[0].created || "")}
                  </p>
                </div>
              </div>
              <div className="space-x-2">
                {posts[0].tags.slice(0, 2).map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-transparent hover:bg-transparent focus:bg-transparent text-white border border-white/80"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="space-y-6">
        <h2 className="text-foreground text-3xl tracking-wide font-bold">
          Our Blog Posts
        </h2>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-16 pb-24">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
