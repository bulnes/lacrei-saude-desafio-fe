import { render, screen } from "@testing-library/react";
import { Who } from "./index";

describe("<Who />", () => {
  it("deve renderizar o título principal corretamente", () => {
    render(<Who />);

    const title = screen.getByRole("heading", {
      name: /atendimento qualificado, seguro e inclusivo/i,
    });

    expect(title).toBeInTheDocument();
  });

  it("deve renderizar todos os parágrafos informativos", () => {
    render(<Who />);

    const p1 = screen.getByText(
      /possibilitar a inclusão clínica da nossa comunidade/i
    );
    const p2 = screen.getByText(/Lacrei Saúde nasceu em 2020/i);
    const p3 = screen.getByText(/Atuamos de forma ética e embasada/i);

    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
    expect(p3).toBeInTheDocument();
  });
});
