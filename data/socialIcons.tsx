import {
  Github,
  Instagram,
  Twitter,
  Youtube,
  Music2,
  Globe,
  Circle,
} from "lucide-react";

export const socialIconMap = {
  github: Github,
  instagram: Instagram,
  twitter: Twitter,
  x: Twitter,
  youtube: Youtube,
  music: Music2,
  website: Globe,
};

export type SocialPlatform = keyof typeof socialIconMap;
