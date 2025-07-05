import Header from "@/components/header";
import Footer from "@/components/footer";
import ReduxProvider from "@/providers/ReduxProvider";
import "./globals.css";
import { Languages } from "@/constants/enums";

export async function generateStaticParams() {
  return [{ locale: Languages.ARABIC }, { locale: Languages.ENGLISH }];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
