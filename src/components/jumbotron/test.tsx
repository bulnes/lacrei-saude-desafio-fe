import { render, screen } from "@testing-library/react";
import { Jumbotron } from "./index";

describe("<Jumbotron />", () => {
  it("deve renderizar o título de boas-vindas corretamente", () => {
    render(<Jumbotron />);

    const title = screen.getByRole("heading", {
      name: /bem-vindo à lacrei saúde/i,
    });
    expect(title).toBeInTheDocument();
  });

  it("deve renderizar a descrição da plataforma", () => {
    render(<Jumbotron />);

    const description = screen.getByText(/sua plataforma de saúde inclusiva/i);
    expect(description).toBeInTheDocument();
  });

  it('deve renderizar o texto em destaque "LGBTQIA+" dentro da descrição', () => {
    render(<Jumbotron />);

    // Como o texto está dentro de uma tag <strong>, podemos buscar especificamente por ele
    const highlight = screen.getByText("LGBTQIA+");

    expect(highlight).toBeInTheDocument();
    // Verifica se ele está de fato usando a tag semântica strong
    expect(highlight.tagName).toBe("STRONG");
  });

  it("deve garantir que o container principal da seção está sendo renderizado", () => {
    const { container } = render(<Jumbotron />);

    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });
});
