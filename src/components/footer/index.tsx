import * as GS from "@/app/global.styles";
import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";

const content = [
  {
    title: "Lacrei Saúde",
    links: [
      { label: "Sobre Nós", href: "/quem-somos" },
      { label: "Nosso Propósito", href: "/quem-somos" },
      { label: "Missão, Visão e Valor", href: "/quem-somos" },
      {
        label: "Acessibilidade",
        href: "https://lacreisaude.com.br/acessibilidade/",
      },
    ],
  },
  {
    title: "Saúde",
    links: [
      {
        label: "Buscar atendimento",
        href: "https://paciente.lacreisaude.com.br/",
      },
      {
        label: "Oferecer atendimento",
        href: "https://profissional.lacreisaude.com.br/",
      },
    ],
  },
  {
    title: "Segurança e Privacidade",
    links: [
      {
        label: "Política de Privacidade",
        href: "https://lacreisaude.com.br/politica-de-privacidade/",
      },
      {
        label: "Termos de Serviço",
        href: "https://lacreisaude.com.br/termos-de-uso/",
      },
      {
        label: "Direitos de Titular",
        href: "https://lacreisaude.com.br/direitos-de-titular/",
      },
    ],
  },
];

export function Footer() {
  return (
    <S.FooterContainer>
      <S.Divider />

      <S.Content>
        <h2>
          <Image
            src="/images/logo-v2.svg"
            alt="Logo Lacrei Saúde"
            width={170}
            height={48}
          />
          <GS.srOnly>Lacrei Saúde</GS.srOnly>
        </h2>

        {content.map((section) => (
          <S.ContentSection key={section.title}>
            <S.ContentTitle>{section.title}</S.ContentTitle>

            <nav>
              {section.links.map((link) => {
                const extraAttributes = link.href.startsWith("http")
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {};

                return (
                  <Link key={link.label} href={link.href} {...extraAttributes}>
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </S.ContentSection>
        ))}
      </S.Content>

      <S.Divider />

      <S.Footnote>
        <p>
          A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de
          emergência procure o hospital mais próximo.
        </p>
        <p>
          Em caso de auxílio psicológico,{" "}
          <Link href="tel:188">ligue para 188 (CVV)</Link> ou acesse o site{" "}
          <Link
            href="https://www.cvv.org.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            CVV
          </Link>
          .
        </p>
        <p>
          Copyright &copy; {new Date().getFullYear()} Lacrei Saúde. Todos os
          direitos reservados. CNPJ: 51.265.351/0001-65
        </p>
      </S.Footnote>
    </S.FooterContainer>
  );
}
