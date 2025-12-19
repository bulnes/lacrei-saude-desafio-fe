'use client';

import styled from 'styled-components';

export const WhatContainer = styled.section`
  max-width: 74.75rem;

  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 4rem;
  margin: auto auto 3rem;

  img {
    display: none;
    border-radius: 8px;
    width: 40rem;
    height: 28.85rem;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    img {
      display: block;
    }
  }
`;

export const Card = styled.div`
  border: 1px solid rgb(215, 215, 215);
  border-radius: 8px;
  padding: 1.45rem 1.925rem;
  background-color: rgb(255, 255, 255);
  margin-left: -1.5rem;
  width: 29.625rem;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  margin-bottom: 1.5rem;

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

export const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 2.7rem;
  position: relative;
`;

export const Description = styled.p`
  color: rgb(81, 81, 81);
  line-height: 1.5rem;
`;
