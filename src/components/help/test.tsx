import { render, screen } from "@testing-library/react";
import { Help } from "./index";

describe("<Help />", () => {
  it("deve renderizar o título da seção de dúvidas", () => {
    render(<Help />);

    const title = screen.getByRole("heading", { name: /dúvidas/i });
    expect(title).toBeInTheDocument();
  });

  it("deve renderizar todas as perguntas em negrito", () => {
    render(<Help />);

    const q1 = screen.getByText(
      /como faço para me cadastrar na lacrei saúde\?/i
    );
    const q2 = screen.getByText(/quais serviços a lacrei saúde oferece\?/i);
    const q5 = screen.getByText(/como posso entrar em contato com o suporte/i);

    expect(q1).toBeInTheDocument();
    expect(q1.tagName).toBe("STRONG");
    expect(q2).toBeInTheDocument();
    expect(q5).toBeInTheDocument();
  });

  it("deve renderizar as respostas correspondentes", () => {
    render(<Help />);

    expect(
      screen.getByText(/basta acessar nosso site e clicar em 'cadastrar-se'/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /oferecemos uma variedade de serviços de saúde inclusivos/i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/suporte@lacrei\.com\.br/i)).toBeInTheDocument();
  });

  it("deve renderizar a quantidade correta de parágrafos de ajuda", () => {
    render(<Help />);

    const paragraphs = screen.getAllByText(/(\?|Lacrei Saúde)/i, {
      selector: "strong",
    });

    expect(paragraphs).toHaveLength(5);
  });
});
