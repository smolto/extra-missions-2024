import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Extra Missions",
  description: "Extra Missions for my students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer>
          <div className="irene-paragraph">
            <p>Original materials by</p>
            <h4><strong>Irene Bermúdez</strong></h4>
          </div>
          <div className="santi-paragraph">
          <p>Website developed by</p>
          <a target="_blank" href="https://www.smolto.com">
            <img src="https://extra-missions.vercel.app/static/logo/smolto-logo.svg" height="30" alt="smolto"/>
          </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
