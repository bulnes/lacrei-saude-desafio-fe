'use client';

import styled from "styled-components";

export const JumbotronSection = styled.section`
  background-image: url('/images/greetings-banner-image.webp');
  background-size: cover;
  background-position: top right;
  background-repeat: no-repeat;
  padding: 4rem 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
  }

  @media (min-width: 768px) {
    &::before {
      background-color: rgba(255, 255, 255, 0);
    }
  }
`;

export const JumbotronContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const JumbotronTitleContainer = styled.div`
  max-width: 404px;
`;

export const JumbotronTitle = styled.h2`
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.625rem;
  color: rgb(1, 135, 98);
  margin-bottom: 1rem;
  margin-top: 3rem;
`;

export const JumbotronDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.25rem;
  margin-bottom: 2rem;
  color: rgb(81, 81, 81);
`;
