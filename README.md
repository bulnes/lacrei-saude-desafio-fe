# Lacrei Saúde - Desafio Front-end

Este projeto é uma plataforma de saúde inclusiva desenvolvida com Next.js, TypeScript e Styled Components. O foco principal é oferecer uma interface acessível e performática para a comunidade LGBTQIAPN+.

## Setup e Execução

### Pré-requisitos

- Node.js (v18 ou superior)
- NPM ou Yarn

### Instalação

Clone o repositório:

```bash
git clone https://github.com/bulnes/lacrei-saude-desafio-fe.git
```

Instale as dependências:

```bash
npm install
```

## Desenvolvimento

O projeto utiliza **concurrently** para rodar simultaneamente o Next.js e o JSON Server (Fake API):

```bash
npm run dev
```

- Website: [http://localhost:3000](http://localhost:3000)
- Fake API: [http://localhost:3001](http://localhost:3001)

## Justificativas Técnicas

**Next.js (App Router)**: Escolhido pela eficiência no roteamento e otimização nativa de performance (como o componente Image e Link).

**Styled Components**: Utilizado para garantir estilos escopados, suporte a temas e evitar conflitos de CSS em componentes reutilizáveis.

**TypeScript**: Implementado para garantir segurança de tipos, reduzindo erros em tempo de execução e melhorando o IntelliSense durante o desenvolvimento.

**JSON Server**: Adotado para simular um ambiente de API real, permitindo o desenvolvimento de fluxos assíncronos (loading/error) de forma fidedigna.

**Jest & React Testing Library**: A suíte de testes foca na experiência do usuário (acessibilidade), garantindo que os componentes sejam funcionais e acessíveis por leitores de tela (usando roles e ARIA labels).

## Deploy

O deploy da aplicação foi configurado para a Vercel.

O build é gerado através do comando:

```bash
npm run build
```

A versão estática e otimizada é servida via:

```bash
npm start
```

Nota: Para o funcionamento da Fake API em produção, os dados do db.json devem ser migrados para uma API real.

## Estratégia de Rollback

Caso uma nova versão apresente falhas críticas em produção, os seguintes passos devem ser seguidos:

1. Via Vercel (Interface)

- Acesse o dashboard do projeto na Vercel.
- Vá em Deployments.
- Localize a última versão estável (conhecida como Green Deployment).
- Clique nos três pontos e selecione Promote to Production.

2. Via Git (CLI)

Caso precise reverter o código localmente e subir um hotfix:

```bash
# Identifica o commit estável
git log --oneline

# Reverte para o commit desejado
git revert HEAD

# Faz o push da reversão
git push origin main
```

## Testes e Cobertura

Para garantir a qualidade e evitar regressões:

Executar testes:

```bash
npm run test
```

Modo Watch:

```bash
npm run test:watch
```

Relatório de Coverage:

```bash
npm run test:coverage
```

Os testes focam na experiência do usuário, verificando a acessibilidade e funcionalidade dos componentes.

Todos os componentes foram testados com uma cobertura de 95%.

Ao executar `npm run test:coverage`, o relatório detalhado estará disponível em `./coverage/lcov-report/index.html`, podendo ser aberto em qualquer navegador. A imagem abaixo ilustra a cobertura geral do projeto:

![Coverage Report](./public/readme/test-coverage.png)

## Scripts Disponíveis

- `dev`: Inicia o ambiente de desenvolvimento completo.
- `build`: Prepara a aplicação para produção.
- `lint`: Executa a verificação estática do código.
- `test:coverage`: Gera relatório detalhado de testes.
- `fake:api`: Inicia apenas o servidor mock na porta 3001.

## PageSpeed Insights by Google

O projeto foi otimizado para alcançar uma pontuação alta no PageSpeed Insights, focando em:

- Performance
- Acessibilidade
- Boas práticas
- SEO
- Experiência com dispositivos móveis

Para a versão mobile, a pontuação alcançada foi de 97/100 em Performance e 100/100 nos demais critérios.

![PageSpeed Insights Mobile](./public/readme/pagespeed-mobile.png)

Para a versão desktop, a pontuação alcançada foi de 100/100 em todos os critérios.

![PageSpeed Insights Desktop](./public/readme/pagespeed-desktop.png)

Para mais detalhes, consulte o [relatório completo no Google PageSpeed Insights](https://pagespeed.web.dev/analysis/https-lacrei-saude-desafio-fe-vercel-app/rxyvr70v23?form_factor=mobile).

## Acessibilidade

O projeto segue as melhores práticas de acessibilidade, incluindo:

- HTML semântico
- Uso de ARIA labels
- Testes com foco em leitores de tela
- Contraste adequado de cores
- Navegação via teclado

É fundamental garantir que a plataforma seja utilizável por todos, independentemente de suas habilidades.

---

Este README foi desenvolvido para demonstrar clareza técnica e transparência nos processos de engenharia. 🏳️‍🌈
