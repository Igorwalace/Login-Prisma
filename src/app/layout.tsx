//react/nnext
import type { Metadata } from "next";

//css
import "./globals.css";

//fonts
import { poppins } from "./fonts/fonts";


export const metadata: Metadata = {
  title: "Login TESTE",
  description: "Pagina de login teste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href='/icon.png' />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
