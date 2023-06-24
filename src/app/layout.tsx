import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GPT Audio Web App",
  description: "GPT Audio Web App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://code.responsivevoice.org/responsivevoice.js?key=${process.env.NEXT_PUBLIC_RESPONSIVE_VOICE_API_KEY}`}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
