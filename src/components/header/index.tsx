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
        <Link href="#">
          <S.NavLink type="button">Quem Somos</S.NavLink>
        </Link>

        <Link href="#">
          <S.NavLink type="button">Ajuda</S.NavLink>
        </Link>
      </S.NavContainer>
    </S.HeaderContainer>
  );
}
