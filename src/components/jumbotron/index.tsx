import * as S from "./styles";

export function Jumbotron() {
  return (
    <S.JumbotronSection>
      <S.JumbotronContainer>
        <S.JumbotronTitleContainer>
          <S.JumbotronTitle>Bem-vindo à Lacrei Saúde</S.JumbotronTitle>
          <S.JumbotronDescription>
            Sua plataforma de saúde inclusiva, conectando você a profissionais
            comprometidos com o cuidado <strong>LGBTQIA+</strong>.
          </S.JumbotronDescription>
        </S.JumbotronTitleContainer>
      </S.JumbotronContainer>
    </S.JumbotronSection>
  );
}
