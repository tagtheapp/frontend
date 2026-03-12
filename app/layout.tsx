import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TAG",
  description: "Bring back the thrill of playground tag across your town, campus, or city, with live maps, groups, and real-time hunts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
