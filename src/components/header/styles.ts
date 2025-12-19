"use client";

import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 96px;
  max-width: 74.75rem;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    height: 96px;
    padding: 0;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  background-color: rgb(255, 255, 255);
  height: 3rem;
  line-height: 1.75rem;
  border: none;
  border-radius: 8px;
  padding: 0.625rem 2rem;
  color: rgb(1, 135, 98);
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.02rem;
  cursor: pointer;
  transition: 0.2s;
  text-decoration: none;
`;
