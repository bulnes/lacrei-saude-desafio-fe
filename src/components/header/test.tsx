import { render, screen } from "@testing-library/react";
import { Header } from "./index";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("<Header />", () => {
  it("deve renderizar a logo com o link para a home", () => {
    render(<Header />);

    const logoLink = screen.getByRole("link", { name: /lacrei saúde/i });
    expect(logoLink).toHaveAttribute("href", "/");

    const logoImg = screen.getByAltText(/lacrei saúde/i);
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute(
      "src",
      expect.stringContaining("logo-v1.svg")
    );
  });

  it("deve renderizar os links de navegação corretamente", () => {
    render(<Header />);

    const linkQuemSomos = screen.getByRole("link", { name: /quem somos/i });
    const linkAjuda = screen.getByRole("link", { name: /ajuda/i });

    expect(linkQuemSomos).toBeInTheDocument();
    expect(linkQuemSomos).toHaveAttribute("href", "/quem-somos");

    expect(linkAjuda).toBeInTheDocument();
    expect(linkAjuda).toHaveAttribute("href", "/ajuda");
  });

  it("deve conter o texto de acessibilidade para leitores de tela", () => {
    render(<Header />);

    const srText = screen.getAllByText(/lacrei saúde/i);

    expect(srText.length).toBeGreaterThanOrEqual(1);
  });

  it("deve renderizar o título principal (h1) para fins de SEO", () => {
    render(<Header />);

    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
  });
});
