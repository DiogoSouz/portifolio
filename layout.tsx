import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/header";
import { TailwindIndicator } from "./components/tailwind-indicator";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

	title: "Typeface Bureau",
	authors: {
		name: "Pablo Oliveira",
	},

	description:
		"Aqui você encontra projetos que refletem minha paixão por criar soluções visuais impactantes e funcionais. Com experiência em design gráfico, identidade visual, UI/UX e ilustração, busco transformar ideias em experiências únicas, aliando criatividade e técnica.",
	openGraph: {
		title: "Studios",
		description:
			"Aqui você encontra projetos que refletem minha paixão por criar soluções visuais impactantes e funcionais. Com experiência em design gráfico, identidade visual, UI/UX e ilustração, busco transformar ideias em experiências únicas, aliando criatividade e técnica.",
		url: "",
		siteName: "Typeface Bureau",
		images: "",
		type: "website",
	},
	keywords: ["design", "graphic design", "designer"],
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header/>
            {children}
            <Footer/>
            <TailwindIndicator/>
          </ThemeProvider>
        </body>
    </html>
  );
}
