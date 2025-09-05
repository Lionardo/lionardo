import React from "react";
import { socialIconMap } from "../data/socialIcons";

export interface SocialLink {
  platform: keyof typeof socialIconMap;
  url: string;
  label?: string;
}

export default function SocialIcon({ platform, url, label }: SocialLink) {
  const Icon = socialIconMap[platform];
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800/80 text-neutral-300 hover:text-brand hover:border-brand transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/70 shadow-sm hover:shadow-md"
      aria-label={label || platform}
      title={label || platform}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
