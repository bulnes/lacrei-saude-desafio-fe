"use client";

import { useEffect, useState } from "react";
import * as S from "./styles";

interface FAQItem {
  question: string;
  answer: string;
}

export function Help() {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFAQ() {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3001/faq");

        if (!response.ok) throw new Error("Erro ao buscar dados");

        const data = await response.json();
        setQuestionsAndAnswers(data);
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchFAQ();
  }, []);

  return (
    <S.HelpContainer>
      <div>
        <S.Title>Dúvidas</S.Title>

        {loading && <S.Paragraph>Carregando perguntas...</S.Paragraph>}

        {error && !loading && (
          <S.Paragraph>
            Ops! Não conseguimos carregar as dúvidas agora. Tente novamente mais
            tarde.
          </S.Paragraph>
        )}

        {!loading &&
          !error &&
          questionsAndAnswers.map((item, index) => (
            <S.Paragraph key={index}>
              <strong>{item.question}</strong>
              {item.answer}
            </S.Paragraph>
          ))}
      </div>
    </S.HelpContainer>
  );
}
