import { Space_Grotesk as FontSans } from "next/font/google";
import "./globals.css";

const font = FontSans({ subsets: ["latin"] });

export const metadata = {
  title: "Dark Mode Simulation",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
