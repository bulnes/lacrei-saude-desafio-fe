import { render, screen } from "@testing-library/react";
import { Help } from "./index";

const mockFAQ = [
  {
    question: "Como faço para me cadastrar na Lacrei Saúde?",
    answer:
      "Para se cadastrar, basta acessar nosso site e clicar em 'Cadastrar-se'...",
  },
];

describe("<Help />", () => {
  beforeEach(() => {
    // Silencia o console.error para não sujar o log durante os testes de erro
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("deve renderizar o título e o estado de carregamento inicialmente", () => {
    global.fetch = jest.fn(() => new Promise(() => {}));
    render(<Help />);

    // Usamos getByRole para ser específico no título (h2) e evitar conflito com parágrafos
    expect(
      screen.getByRole("heading", { name: /dúvidas/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/carregando perguntas\.\.\./i)).toBeInTheDocument();
  });

  it("deve exibir mensagem de erro caso o fetch falhe", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Erro de conexão"));

    render(<Help />);

    // 1. Aguarda a mensagem de erro aparecer
    const errorMsg = await screen.findByText(
      /ops! não conseguimos carregar as dúvidas/i
    );
    expect(errorMsg).toBeInTheDocument();

    // 2. CORREÇÃO DO ERRO: Usamos getByRole para diferenciar o H2 da mensagem de erro
    const title = screen.getByRole("heading", { name: /dúvidas/i });
    expect(title).toBeInTheDocument();
  });

  it("deve exibir mensagem de erro caso a resposta não seja 'ok'", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    render(<Help />);

    const errorMsg = await screen.findByText(
      /ops! não conseguimos carregar as dúvidas agora/i
    );
    expect(errorMsg).toBeInTheDocument();
  });

  it("deve renderizar as perguntas após fetch bem-sucedido", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => mockFAQ,
    });

    render(<Help />);

    const question = await screen.findByText(
      /como faço para me cadastrar na lacrei saúde\?/i
    );
    expect(question).toBeInTheDocument();
    expect(question.tagName).toBe("STRONG");
  });
});
