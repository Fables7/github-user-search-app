import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import ThemeProvider from "@/providers/theme-provider";
import ReactQueryProvider from "@/providers/reactQueryProvider";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
