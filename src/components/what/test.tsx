import { render, screen } from "@testing-library/react";
import { What } from "./index";

describe("<What />", () => {
  it("deve renderizar o título principal corretamente", () => {
    render(<What />);

    const title = screen.getByText(/o que é a lacrei saúde\?/i);
    expect(title).toBeInTheDocument();
  });

  it("deve renderizar as descrições sobre a conexão entre comunidade e profissionais", () => {
    render(<What />);

    const desc1 = screen.getByText(
      /construir a conexão entre as pessoas da comunidade/i
    );
    const desc2 = screen.getByText(/segurança, inclusão e representatividade/i);

    expect(desc1).toBeInTheDocument();
    expect(desc2).toBeInTheDocument();
  });

  it('deve renderizar o link "Saiba mais" apontando para a página correta', () => {
    render(<What />);

    const link = screen.getByRole("link", { name: /saiba mais/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/quem-somos");
  });

  it("deve garantir que o componente de imagem (Next/Image) está presente no container", () => {
    const { container } = render(<What />);

    const img = container.querySelector("img");
    expect(img).toBeInTheDocument();
  });
});
