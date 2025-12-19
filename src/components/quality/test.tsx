import { render, screen } from "@testing-library/react";
import { Quality } from "./index";

describe("<Quality />", () => {
  it("deve renderizar o título e a descrição da seção", () => {
    render(<Quality />);

    expect(
      screen.getByText(/conheça o jeito lacrei saúde de cuidar/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/atendimento de qualidade e inclusivo/i)
    ).toBeInTheDocument();
  });

  it("deve renderizar exatamente três cards de qualidade", () => {
    render(<Quality />);

    const titles = ["Inclusão", "Acolhimento", "Segurança"];

    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("deve renderizar as descrições correspondentes de cada card", () => {
    render(<Quality />);

    expect(
      screen.getByText(/nossa plataforma digital é acessível/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /as pessoas profissionais da saúde entendem as necessidades/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/protegemos seus dados e validamos pacientes/i)
    ).toBeInTheDocument();
  });

  it("deve renderizar os ícones com o atributo alt correto para acessibilidade", () => {
    render(<Quality />);

    expect(screen.getByAltText("Inclusão")).toBeInTheDocument();
    expect(screen.getByAltText("Acolhimento")).toBeInTheDocument();
    expect(screen.getByAltText("Segurança")).toBeInTheDocument();
  });

  it("deve garantir que as imagens dos ícones possuem os caminhos de arquivo corretos", () => {
    render(<Quality />);

    const icons = screen.getAllByRole("img");
    const srcList = icons.map((img) => img.getAttribute("src"));

    expect(srcList).toContain("/images/handshake-icon.svg");
    expect(srcList).toContain("/images/heart-icon.svg");
    expect(srcList).toContain("/images/shield-icon.svg");
  });
});
