"use client";

import styled from "styled-components";

export const FooterContainer = styled.footer`
  max-width: 74.75rem;
  margin: 0 auto;
  padding: 0 2rem 4rem;

  @media (min-width: 768px) {
    padding: 0 0 4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContentSection = styled.div`
  &, & > nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & a {
    text-decoration: none;
    font-size: 1rem;
    line-height: 1.5rem;
    color: rgb(31, 31, 31);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ContentTitle = styled.h3`
  font-size: 1.125rem;
  line-height: 1.688rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgb(176, 224, 211);
  margin: 2rem 0;
`;

export const Footnote = styled.div`
  font-size: 0.875rem;

  & a {
    text-decoration: underline;
  }

  & > p:last-child {
    margin-top: 1rem;
  }
`;
