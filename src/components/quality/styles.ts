'use client';

import styled from 'styled-components';

export const QualityContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 74.75rem;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  text-align: center;
  margin-bottom: 1.5rem;

  &::after {
    content: " ";
    display: block;
    width: 10rem;
    height: 0.125rem;
    background: rgb(1, 135, 98);
    border-radius: 4px;
    margin: 0.5rem auto;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: rgb(45, 45, 45);
  margin-bottom: 3rem;
  margin-top: 1rem;
  text-align: center;
`;

export const CardsContainer = styled.div`
  max-width: 69.75rem;
  gap: 1.5rem;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex: 1 1 0%;
`;

export const Card = styled.div`
  height: 288px;
  gap: 1rem;
  border-radius: 8px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  text-align: center;
  background-color: rgb(249, 243, 255);
  position: relative;
`;

export const IconWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.4rem;
  margin-top: 0.5rem;
  background: linear-gradient(105.43deg, rgb(1, 131, 131) 14.39%, rgb(1, 70, 135) 84.69%) text;
`;

export const CardDescription = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
`;