import type { LinkItem } from "../components/LinkCard";
import type { SocialLink } from "../components/SocialIcon";

export const musicLinks: LinkItem[] = [
  {
    title: "Spotify Artist",
    url: "https://open.spotify.com/artist/71fDU4AyoZy8KP1Tc9pgOs",
    description: "Listen on Spotify.",
    icon: "/Spotify_icon.svg",
  },
  {
    title: "Apple Music",
    url: "https://music.apple.com/us/artist/lionardo/1837552422",
    description: "Listen on Apple Music.",
    icon: "/Apple_Music_icon.svg",
  },
  {
    title: "YouTube Music Channel",
    url: "https://www.youtube.com/@lionardo",
    description: "Watch & listen on YouTube.",
    icon: "/Youtube_music_icon.svg",
  },
];

export const businessLinks: LinkItem[] = [
  {
    title: "getitAI",
    url: "https://getit.ai",
    description: "AI-driven sales solutions platform.",
    icon: "/getitAI.jpg",
  },
  {
    title: "Mindart",
    url: "https://mindart.app",
    description: "AI powered carrer & self development",
    icon: "/mindart.svg",
  },
  {
    title: "Active Inference AI",
    url: "https://active-inference.ai",
    description: "Educational platform on Active Inference.",
    icon: "/active_inference.svg",
  },
];

export const socialLinks: SocialLink[] = [
  { platform: "instagram", url: "https://www.instagram.com/lionardomendonca" },
  { platform: "x", url: "https://x.com/liomendonca" },
  { platform: "youtube", url: "https://www.youtube.com/@lionardo" },
  { platform: "github", url: "https://github.com/Lionardo" },
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
