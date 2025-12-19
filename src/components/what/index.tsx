import Image from "next/image";
import * as S from "./styles";

export function What() {
  return (
    <S.WhatContainer>
      <Image
        src="/images/people-holding-flag.webp"
        alt=""
        width={1324}
        height={924}
      />

      <S.Card>
        <S.Title>O que é a Lacrei Saúde?</S.Title>
        <S.Descriptions>
          <S.Description>
            O nosso papel é construir a conexão entre as pessoas da comunidade
            LGBTQIAPN+ mais que precisam de atendimento clínico com
            profissionais da saúde.
          </S.Description>

          <S.Description>
            Tudo isso com segurança, inclusão e representatividade.
          </S.Description>
        </S.Descriptions>

        <S.CTA href="/quem-somos">Saiba mais</S.CTA>
      </S.Card>
    </S.WhatContainer>
  );
}
