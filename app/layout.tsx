import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Humaning - Transforme sua equipe com nossos programas de transformação",
    template: "%s | Humaning"
  },
  description: "Empresa especializada em análise de perfil comportamental que ajuda pessoas a descobrir pontos fortes e áreas de melhoria, alcançando seu potencial máximo. 4.400+ pessoas impactadas desde 2022.",
  keywords: [
    "análise de perfil comportamental",
    "comportamento organizacional",
    "treinamento de equipe",
    "desenvolvimento de liderança",
    "comunicação empresarial",
    "vendas e atendimento",
    "Humaning",
    "Entender para Atender",
    "Entender para se Conectar"
  ],
  authors: [{ name: "Humaning" }],
  creator: "Humaning",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://humaning.com.br",
    siteName: "Humaning",
    title: "Humaning - Transforme sua equipe com nossos programas de transformação",
    description: "Empresa especializada em análise de perfil comportamental. Transforme equipes através do autoconhecimento e comunicação eficaz com os programas Entender para Atender e Entender para se Conectar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Humaning - Transforme sua equipe",
    description: "4.400+ pessoas impactadas. Análise de perfil comportamental para transformar equipes. Conheça nossos programas Entender para Atender e Entender para se Conectar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
