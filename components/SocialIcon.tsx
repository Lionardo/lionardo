import { socialIconMap } from "../data/socialIcons";

export interface SocialLink {
  platform: keyof typeof socialIconMap;
  url: string;
  label?: string;
}

export default function SocialIcon({ platform, url, label }: SocialLink) {
  const Icon = socialIconMap[platform] || socialIconMap.website;
  const aria = (label || platform) as string;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/80 hover:bg-brand/10 text-neutral-300 hover:text-brand hover:border-brand transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/70 shadow-sm hover:shadow-md"
      aria-label={aria}
      title={aria}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
