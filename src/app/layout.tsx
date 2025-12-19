import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import StyledComponentsRegistry from "@/lib/registry";
import { Nunito } from "next/font/google";
import { GlobalStyles } from "./global.styles";
export { default as metadata } from "@/metadata";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable}`}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
