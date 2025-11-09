import { UserAvatar } from "@/components/ui/avatar";
import { NormalizedPageType } from "@/lib/blogs/notion-parser";
import Link from "next/link";

const BlogCard = ({ post }: { post: NormalizedPageType }) => {
  return (
    <li className="w-full group">
     <Link href={`/blog/${post.slug}`}>
      <img
        src={post.cover}
        alt={post.title}
        className="h-[200px] w-full object-cover object-center rounded-lg"
      />
      <div className="py-3">
        <p className="text-primary font-medium text-xs capitalize">
          {post.tags[0]}
        </p>
        <h3 className="font-bold text-xl leading-7 capitalize group-hover:text-primary">{post.title}</h3>
        <p className="line-clamp-2 text-xs text-muted-foreground">
          {post.description}
        </p>
      </div>
      <div className="flex items-center gap-1">
        <UserAvatar
          ProfileSrc={post.author?.avatar_url || ""}
          name={post.author?.name || ""}
          alt="author profile"
          className="size-[26px] rounded-full self-center"
        />
        <p className="text-sm">{post.author?.name}</p>
      </div>
      </Link>
    </li>
  );
};

export default BlogCard;
