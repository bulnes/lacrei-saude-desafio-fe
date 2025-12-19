import * as GS from "@/app/global.styles";
import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";

export function Header() {
  return (
    <S.HeaderContainer>
      <h1>
        <Link href="/">
          <Image
            src="/images/logo-v1.svg"
            alt="Lacrei Saúde"
            width={187}
            height={24}
          />
          <GS.srOnly>Lacrei Saúde</GS.srOnly>
        </Link>
      </h1>

      <S.NavContainer>
        <S.NavLink href="/quem-somos">Quem Somos</S.NavLink>
        <S.NavLink href="/ajuda">Ajuda</S.NavLink>
      </S.NavContainer>
    </S.HeaderContainer>
  );
}
