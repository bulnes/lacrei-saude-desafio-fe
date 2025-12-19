"use client";

import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  background-color: rgb(1, 135, 98);
  width: 14rem;
  height: 3rem;
  line-height: 1.75rem;
  border: 2px solid rgb(1, 135, 98);
  border-radius: 8px;
  padding: 10px;
  color: rgb(255, 255, 255);
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.02rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: rgb(255, 255, 255);
    transition: 0.2s;
    background-color: rgb(0, 119, 86);
    border: 2px solid rgb(0, 119, 86);
  }
`;
