import { MetadataRoute } from "next";
import { globby } from "globby";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

  // Find all page files inside the app directory (excluding API, layout, etc.)
  const paths = await globby([
    "app/**/page.tsx",
    "!app/**/(api|_components|layout|page.*|middleware).*",
  ]);

  const routes = paths
    .map((path) =>
      path
        .replace("app", "")
        .replace("/page.tsx", "")
        .replace("/page.ts", "")
        .replace("index", "")
    )
    .map((path) => ({
      url: `${baseUrl}${path === "" ? "/" : path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return routes;
}
