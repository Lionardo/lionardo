import { Github, Instagram, X, Youtube, Music2, Globe } from "lucide-react";

export const socialIconMap = {
  github: Github,
  instagram: Instagram,
  twitter: X,
  x: X,
  youtube: Youtube,
  music: Music2,
  website: Globe,
};

export type SocialPlatform = keyof typeof socialIconMap;
