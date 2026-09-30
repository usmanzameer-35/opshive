import type { Metadata } from "next";
import "./globals.css";
import "./premium.css";
import "../software-stack.css";

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (deploymentHost ? `https://${deploymentHost}` : "https://operationshive.com");

export const metadata: Metadata = {
  title: { default: "Operations Hive | Managed Business Operations", template: "%s | Operations Hive" },
  description: "Managed customer, business, back-office, taxi and private-hire operations with documented processes, quality controls and clear reporting.",
  metadataBase: new URL(siteUrl),
  openGraph: { title: "Operations Hive | Managed Business Operations", description: "The operational layer behind growing businesses.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
