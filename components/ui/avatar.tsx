"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";
import { ImageProps } from "next/image";

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  );
}

const UserAvatar = ({
  ProfileSrc,
  name,
  alt,
  size = "size-8",
  ...props
}: {
  ProfileSrc: string | undefined;
  name: string;
  size?: string;
} & Omit<ImageProps, "src">) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <Avatar className={size}>
      {ProfileSrc ? (
        <AvatarImage src={ProfileSrc} alt={alt || name} {...props} />
      ) : null}
      <AvatarFallback
        className={cn(
          " bg-primary text-primary-foreground font-bold  text-xs leading-[0]",
          size
        )}
      >
        {initials}
      </AvatarFallback>
    </Avatar>
  );
};

export { Avatar, AvatarImage, AvatarFallback, UserAvatar };
