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
        <script type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "hos6ggstt8");`}
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
