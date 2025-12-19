import * as S from "./styles";

const questionsAndAnswers = [
  {
    question: "Como faço para me cadastrar na Lacrei Saúde?",
    answer:
      "Para se cadastrar, basta acessar nosso site e clicar em 'Cadastrar-se'. Preencha o formulário com suas informações pessoais e crie uma senha segura.",
  },
  {
    question: "Quais serviços a Lacrei Saúde oferece?",
    answer:
      "Oferecemos uma variedade de serviços de saúde inclusivos para a comunidade LGBTQIAPN+, incluindo consultas médicas, terapias e suporte psicológico.",
  },
  {
    question: "Como posso agendar uma consulta?",
    answer:
      "Você pode agendar uma consulta através do nosso site ou aplicativo móvel. Basta selecionar o profissional desejado, escolher uma data e horário disponíveis, e confirmar o agendamento.",
  },
  {
    question:
      "Quais medidas de segurança a Lacrei Saúde adota para proteger meus dados?",
    answer:
      "Utilizamos tecnologias avançadas de criptografia e seguimos rigorosos protocolos de segurança para garantir que seus dados pessoais e médicos estejam sempre protegidos.",
  },
  {
    question: "Como posso entrar em contato com o suporte da Lacrei Saúde?",
    answer:
      "Você pode entrar em contato com nosso suporte através do chat ao vivo no site, pelo e-mail suporte@lacrei.com.br ou pelo telefone (11) 1234-5678.",
  },
];

export function Help() {
  return (
    <S.HelpContainer>
      <div>
        <S.Title>Dúvidas</S.Title>

        {questionsAndAnswers.map((item) => (
          <S.Paragraph key={item.question}>
            <strong>{item.question}</strong>
            {item.answer}
          </S.Paragraph>
        ))}
      </div>
    </S.HelpContainer>
  );
}
