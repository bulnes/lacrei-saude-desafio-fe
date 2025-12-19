import { render, screen } from "@testing-library/react";
import { Footer } from "./index";

describe("<Footer />", () => {
  it("deve renderizar a logo v2 com texto de acessibilidade", () => {
    render(<Footer />);

    const logo = screen.getByAltText(/logo lacrei saúde/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", expect.stringContaining("logo-v2.svg"));
  });

  it("deve renderizar os títulos das seções de conteúdo", () => {
    render(<Footer />);

    expect(
      screen.getByRole("heading", { name: "Lacrei Saúde" })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Saúde" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Segurança e Privacidade" })
    ).toBeInTheDocument();
  });

  it("deve aplicar atributos de segurança em links externos", () => {
    render(<Footer />);

    const externalLink = screen.getByRole("link", { name: /acessibilidade/i });

    expect(externalLink).toHaveAttribute("target", "_blank");
    expect(externalLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it('não deve aplicar target="_blank" em links internos', () => {
    render(<Footer />);

    const internalLink = screen.getByRole("link", { name: /sobre nós/i });

    expect(internalLink).not.toHaveAttribute("target");
    expect(internalLink).toHaveAttribute("href", "/quem-somos");
  });

  it("deve exibir o aviso de que não oferece tratamento emergencial", () => {
    render(<Footer />);

    const warning = screen.getByText(
      /não oferece tratamento médico emergencial/i
    );
    expect(warning).toBeInTheDocument();
  });

  it("deve exibir o link para o CVV com o protocolo de telefone correto", () => {
    render(<Footer />);

    const cvvLink = screen.getByRole("link", { name: /ligue para 188/i });
    expect(cvvLink).toHaveAttribute("href", "tel:188");
  });

  it("deve renderizar o copyright com o ano atual e o CNPJ", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear().toString();
    const copyright = screen.getByText(
      new RegExp(`Copyright.*${currentYear}.*Lacrei Saúde`, "i")
    );
    const cnpj = screen.getByText(/51\.265\.351\/0001-65/i);

    expect(copyright).toBeInTheDocument();
    expect(cnpj).toBeInTheDocument();
  });
});
