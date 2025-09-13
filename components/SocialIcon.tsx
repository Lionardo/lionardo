import { socialIconMap } from "../data/socialIcons";

export interface SocialLink {
  platform: keyof typeof socialIconMap;
  url: string;
  label?: string;
}

export default function SocialIcon({ platform, url, label }: SocialLink) {
  const Icon = socialIconMap[platform] || socialIconMap.website;
  const displayNameMap: Record<string, string> = {
    x: "X",
    twitter: "X",
    youtube: "YouTube",
    instagram: "Instagram",
    github: "GitHub",
    website: "Website",
    music: "Music",
  };
  const display = (label ||
    displayNameMap[platform] ||
    (platform as string).charAt(0).toUpperCase() +
      (platform as string).slice(1)) as string;
  const aria = display;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 items-center justify-center gap-2 px-3 rounded-full border border-neutral-800 bg-neutral-900/80 hover:bg-brand/10 text-neutral-300 hover:border-brand transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/70 shadow-sm hover:shadow-md"
      aria-label={aria}
      title={aria}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm">{display}</span>
    </a>
  );
}
