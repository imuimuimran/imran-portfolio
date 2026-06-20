import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import { siteMetadata } from "@/lib/metadata";
import { Toaster } from "sonner";

// export const metadata: Metadata = {
//   title: "Imran Hossain | Full Stack Developer",
//   description:
//     "Portfolio of Imran Hossain",
// };

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}