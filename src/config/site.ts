export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Farming Camp Wiki",
  shortName: "Farming Camp",
  logoText: "FC",
  tagline: "Cozy Farming Guides, Tips & Activities",
  description: "Explore Farming Camp Wiki with farming guides, beginner tips, activity details, character information, and helpful resources for managing your cozy camp farm adventure.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://farming-camp.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://farming-camp.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/2985880/Farming_Camp/",
  heroVideoId: "jDgnYR8F8SY", // Farming Camp official announcement trailer
  social: {
    discord: "https://discord.com/game/farming-camp-1553254917093990502",
    youtube: "https://www.youtube.com/watch?v=jDgnYR8F8SY",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
