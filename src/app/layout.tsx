import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./theme-provider";
import MenuBar from "@/components/menu-bar";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800"]
});

export const metadata: Metadata = {
  title: "Contries",
  description: "Contries App",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-dvh">
      <body className={`h-full ${nunito.className}`}>
        <ThemeProvider>
          <MenuBar></MenuBar>
          <div className="flex flex-1 flex-col bg-secondary dark:text-white">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
