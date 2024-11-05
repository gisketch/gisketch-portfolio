import { MetadataRoute } from "next";
import { projects, repositories } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gisketch.com";

  // Base routes
  const routes = ["", "/projects", "/resume"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.name
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Repository routes
  const repoRoutes = repositories.map((repo) => ({
    url: repo.url,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...routes, ...projectRoutes, ...repoRoutes];
}
