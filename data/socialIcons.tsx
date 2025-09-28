// Social platforms we support in the UI. These strings map to
// react-social-icons "network" names, with a few aliases handled below.
export type SocialPlatform =
  | "github"
  | "instagram"
  | "twitter"
  | "x"
  | "youtube"
  | "tiktok"
  | "website"
  | "music";

// Map common aliases to the underlying react-social-icons network id.
// For example, X (formerly Twitter) still uses the "twitter" network id
// in most icon libraries.
export const networkAlias: Record<string, string> = {
  x: "x",
};

export function resolveNetwork(platform?: string): string | undefined {
  if (!platform) return undefined;
  return networkAlias[platform] ?? platform;
}
