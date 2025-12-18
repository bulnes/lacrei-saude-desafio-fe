import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";

const content = [
  {
    title: "Lacrei Saúde",
    links: [
      { label: "Sobre Nós", href: "#" },
      { label: "Nosso Propósito", href: "#" },
      { label: "Missão, Visão e Valor", href: "#" },
      { label: "Acessibilidade", href: "#" },
    ],
  },
  {
    title: "Saúde",
    links: [
      { label: "Buscar atendimento", href: "#" },
      { label: "Oferecer atendimento", href: "#" },
    ],
  },
  {
    title: "Segurança e Privacidade",
    links: [
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Serviço", href: "#" },
      { label: "Direitos de Titular", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <S.FooterContainer>
      <S.Divider />

      <S.Content>
        <Image
          src="/images/logo-v2.svg"
          alt="Logo Lacrei Saúde"
          width={170}
          height={48}
        />

        {content.map((section) => (
          <S.ContentSection key={section.title}>
            <S.ContentTitle>{section.title}</S.ContentTitle>

            <nav>
              {section.links.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
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
