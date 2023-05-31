import styled, { css } from "styled-components/native";

export const Input = styled.TextInput`
  width: 100%;
  height: 120px;
  padding: 14px;
  border-radius: 6px;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};
  `}
`