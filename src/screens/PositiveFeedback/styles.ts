import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme })=> theme.COLORS.GRAY_700};
  align-items: center;
  justify-content: center;
  padding: 32px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL};
    color: ${theme.COLORS.GREEN_DARK};
  `}
`

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const FeedbackImage = styled.Image`
  margin-top: 40px;
  margin-bottom: 32px;
`