import Image from "next/image";
import * as S from "./styles";

const cards = [
  {
    icon: "/images/handshake-icon.svg",
    title: "Inclusão",
    description:
      "Nossa plataforma digital é acessível e atendemos toda comunidade LGBTQIAPN+.",
  },
  {
    icon: "/images/heart-icon.svg",
    title: "Acolhimento",
    description:
      "As pessoas profissionais da saúde entendem as necessidades da comunidade LGBTQIAPN+.",
  },
  {
    icon: "/images/shield-icon.svg",
    title: "Segurança",
    description:
      "Protegemos seus dados e validamos pacientes e profissionais da saúde.",
  },
];

export function Quality() {
  return (
    <S.QualityContainer>
      <S.Title>Conheça o jeito Lacrei Saúde de cuidar</S.Title>
      <S.Description>Atendimento de qualidade e inclusivo</S.Description>

      <S.CardsContainer>
        {cards.map((card) => (
          <S.Card key={card.title}>
            <S.IconWrapper>
              <Image src={card.icon} alt={card.title} width={56} height={66} />
            </S.IconWrapper>
            <S.CardTitle>{card.title}</S.CardTitle>
            <S.CardDescription>{card.description}</S.CardDescription>
          </S.Card>
        ))}
      </S.CardsContainer>
    </S.QualityContainer>
  );
}
