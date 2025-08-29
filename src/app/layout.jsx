import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-zinc-200 dark:selection:bg-zinc-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


