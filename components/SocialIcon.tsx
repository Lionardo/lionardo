import { resolveNetwork, type SocialPlatform } from "../data/socialIcons";
import { SocialIcon as RSIcon } from "react-social-icons";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label?: string;
}

export default function SocialIcon({ platform, url, label }: SocialLink) {
  const displayNameMap: Record<string, string> = {
    x: "X",
    youtube: "YouTube",
    instagram: "Instagram",
    github: "GitHub",
    website: "Website",
    music: "Music",
    tiktok: "TikTok",
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
      className="group inline-flex h-10 items-center gap-2 px-3 rounded-full border border-neutral-800 bg-neutral-900/80 text-neutral-300 hover:border-brand transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/70 shadow-sm hover:shadow-md"
      title={aria}
      aria-label={aria}
    >
      <RSIcon
        url={url}
        network={resolveNetwork(platform)}
        bgColor="transparent"
        fgColor="currentColor"
        className="!m-0 pointer-events-none"
        style={{ height: 20, width: 20 }}
        aria-label={aria}
      />
      <span className="text-sm">{display}</span>
    </a>
  );
}
