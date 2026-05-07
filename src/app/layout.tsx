import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akash Pandey | Full Stack Software Engineer",
  description:
    "Akash Pandey is a Full Stack Software Engineer specializing in building scalable digital products, high-performance web applications, and seamless user experiences with modern technologies like Next.js, React, and Node.js.",
  keywords: [
    "Akash Pandey",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "iamakashpandey",
    "AkkyLabs",
    "Web Development",
    "Software Development Portfolio",
  ],
  authors: [{ name: "Akash Pandey" }],
  creator: "Akash Pandey",
  publisher: "Akash Pandey",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://iamakashpandey.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Akash Pandey | Full Stack Software Engineer",
    description:
      "Building scalable digital products and high-performance web applications.",
    url: "https://iamakashpandey.com",
    siteName: "Akash Pandey Portfolio",
    images: [
      {
        url: "/portfolio1.png",
        width: 1200,
        height: 630,
        alt: "Akash Pandey Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Pandey | Full Stack Software Engineer",
    description:
      "Building scalable digital products and high-performance web applications.",
    creator: "@akkylabs",
    images: ["/portfolio1.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
