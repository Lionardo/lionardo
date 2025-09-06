import type { LinkItem } from "../components/LinkCard";
import type { SocialLink } from "../components/SocialIcon";

export const musicLinks: LinkItem[] = [
  {
    title: "Spotify Artist",
    url: "https://open.spotify.com/artist/71fDU4AyoZy8KP1Tc9pgOs",
    description: "Listen on Spotify.",
  },
  {
    title: "Apple Music",
    url: "https://music.apple.com/us/album/from-the-shadows-ep/1837929890",
    description: "Listen on Apple Music.",
  },
  {
    title: "YouTube Music Channel",
    url: "https://www.youtube.com/channel/UCG7GmsxtKwi7V2OezN-Onug",
    description: "Watch & listen on YouTube.",
  },
];

export const businessLinks: LinkItem[] = [
  {
    title: "getitAI",
    url: "https://getit.ai",
    description: "AI-driven sales solutions platform.",
  },
  {
    title: "Mindart",
    url: "https://mindart.app",
    description: "AI powered carrer & self development",
  },
  {
    title: "Active Inference AI",
    url: "https://active-inference.ai",
    description: "Educational platform on Active Inference.",
  },
];

export const socialLinks: SocialLink[] = [
  { platform: "instagram", url: "https://www.instagram.com/lionardomendonca" },
  { platform: "x", url: "https://x.com/liomendonca" },
  { platform: "youtube", url: "https://www.youtube.com/@lionardo" },
];

export interface LinkCategory {
  id: string;
  title: string;
  links: LinkItem[];
  hidden?: boolean;
}

export const categories: LinkCategory[] = [
  { id: "music", title: "Music", links: musicLinks },
  { id: "business", title: "Business", links: businessLinks },
];
