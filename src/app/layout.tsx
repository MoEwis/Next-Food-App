import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Food Order",
  description: "Order delicious food online! Fast delivery & great prices.",
  keywords: ["food delivery", "online order", "restaurant"],
  icons: {
    icon: "/pizza.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
