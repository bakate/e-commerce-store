import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import { cn } from "@/lib/utils";
import ModalProvider from "@/providers/modal-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import ToastProvider from "@/providers/toast-provider";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afric'Glam",
  description:
    "Afric'Glam est une plateforme de vente en ligne de produits alimentaires et cosmétiques africains.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* push the last item of the body to the bottom of the page */}
      <body className={cn("flex flex-col min-h-screen", font.className)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ToastProvider />
          <ModalProvider />
          <div className="flex-1">
            <NavBar />
            {children}
          </div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
