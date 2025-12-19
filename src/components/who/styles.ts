'use client';

import styled from 'styled-components';

export const WhoContainer = styled.section`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  position: relative;
  max-width: 74.75rem;
  margin: 2rem auto 3rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & > img {
    width: 30.7rem;
    height: 30.7rem;
    margin-top: 8rem;
    border-radius: 2rem;
  }
`;

export const Title = styled.h2`
  width: 35.4rem;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;

  &::after {
    content: " ";
    display: block;
    width: 10rem;
    height: 0.125rem;
    background: rgb(1, 135, 98);
    border-radius: 4px;
    margin: 0.5rem 0;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.25rem;
  color: rgb(45, 45, 45);
  width: 34rem;
`;
