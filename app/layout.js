import { Inter as FontSans } from "next/font/google";
// import {Kdam_Thmor_Pro as FontSans } from "next/font/google"
import "./globals.css";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
// const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata = {
  title: "Location de Voitures, Oran",
  description: "Parcourez l'Algérie avec style et confort grâce à Benadda Dream Car - Votre partenaire de location de voitures de confiance Embarquez pour un voyage inoubliable à travers l'Algérie avec Benadda Dream Car, votre guichet unique pour une location de voiture abordable, fiable et sans tracas. Que vous soyez un voyageur chevronné ou un visiteur pour la première fois, nous avons le véhicule idéal pour répondre à vos besoins et à votre budget.",
  name:"google-site-verification",
   content:"JD-pNmF4w2C1WrKwFEWWLQAFbGNrCLJyd_b3tz8xs68",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased bg-[#F5F5F5]",
        fontSans.variable
      )}>
        <Header />
        {children}
      </body>
    </html>
  );
}
