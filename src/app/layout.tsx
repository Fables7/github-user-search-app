import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import ThemeProvider from "@/providers/theme-provider";
import ReactQueryProvider from "@/providers/reactQueryProvider";
import ReduxProvider from "@/providers/reduxProvider";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "GitHub User Finder",
  description: "GitHub User Finder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} ${spaceMono.className}`}>
          <ReduxProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
            </ThemeProvider>
          </ReduxProvider>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
