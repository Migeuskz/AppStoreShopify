
import {Lexend_Deca} from 'next/font/google'

import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import 'app/sass/globals.sass'


const lexend_deca = Lexend_Deca({ 
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"]
 });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend_deca.className} >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
