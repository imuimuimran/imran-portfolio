import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name:
      "Imran Hossain Portfolio",

    short_name:
      "Imran Portfolio",

    start_url: "/",

    display: "standalone",

    background_color: "#0F172A",

    theme_color: "#3B82F6",
  };
}