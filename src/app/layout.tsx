import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./theme-provider";

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
      <ThemeProvider>
        <div className={`${nunito.className} min-h-full flex flex-col bg-gray-50 dark:bg-[#202C36] dark:text-white`}>{children}</div>
      </ThemeProvider>
    </html>
  );
}
