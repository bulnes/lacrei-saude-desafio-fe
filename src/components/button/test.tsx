import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./index";

describe("<Button />", () => {
  it("deve renderizar o conteúdo (children) corretamente", () => {
    render(<Button>Clique aqui</Button>);

    expect(
      screen.getByRole("button", { name: /clique aqui/i })
    ).toBeInTheDocument();
  });

  it("deve disparar a função onClick quando for clicado", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Enviar</Button>);

    const button = screen.getByRole("button", { name: /enviar/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("deve estar desabilitado quando a prop disabled for passada", () => {
    render(<Button disabled>Aguarde</Button>);

    const button = screen.getByRole("button", { name: /aguarde/i });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("disabled");
  });

  it("deve renderizar com o tipo correto (ex: submit)", () => {
    render(<Button type="submit">Salvar</Button>);

    const button = screen.getByRole("button", { name: /salvar/i });
    expect(button).toHaveAttribute("type", "submit");
  });

  it("deve repassar classes ou outros atributos HTML via props", () => {
    render(
      <Button data-testid="meu-botao" aria-label="Botão de Fechar">
        X
      </Button>
    );

    const button = screen.getByTestId("meu-botao");
    expect(button).toHaveAttribute("aria-label", "Botão de Fechar");
  });
});
