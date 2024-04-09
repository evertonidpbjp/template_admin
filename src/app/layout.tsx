import type { Metadata } from "next";
import { Inter, Roboto, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";


// importando fontes do google fonts
const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto ({
  subsets: ['cyrillic'],
  weight: ['100', '300', '400','500', '700', '900'],
  style: ['italic', 'normal'],
  variable: "--font-roboto"
});

const open_sans = Open_Sans({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '700'],
  style: ['italic', 'normal'],
  variable: "--font-open-sans"
})


export const metadata: Metadata = {
  title: "Aplicação Modelo",
  description: "Admin Template e Github Profile",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${open_sans.variable}`}> {children}
      </body>
    </html>
  );
}
