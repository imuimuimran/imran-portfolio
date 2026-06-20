import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:
        "https://imran-portfolio-ebon.vercel.app",

      lastModified:
        new Date(),
    },
  ];
}