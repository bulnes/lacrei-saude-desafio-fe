import Image from "next/image";
import * as S from "./styles";

export function Who() {
  return (
    <S.WhoContainer>
      <div>
        <S.Title>Atendimento qualificado, seguro e inclusivo</S.Title>

        <S.Paragraph>
          Acreditamos que, ao possibilitar a inclusão clínica da nossa
          comunidade, transformamos o mundo.
        </S.Paragraph>

        <S.Paragraph>
          Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o propósito
          de oferecer a melhor experiência no acesso à profissionais da saúde
          para as pessoas LGBTQIAPN+.
        </S.Paragraph>

        <S.Paragraph>
          Atuamos de forma ética e embasada nas regras e diretrizes
          estabelecidas pelos órgãos de classe e regulamentadores.
        </S.Paragraph>
      </div>
      <Image
        src="/images/about-us-image.webp"
        alt=""
        width={546}
        height={500}
      />
    </S.WhoContainer>
  );
}
