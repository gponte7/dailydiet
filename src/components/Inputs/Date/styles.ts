import styled, { css } from "styled-components/native"
import { TouchableOpacity } from 'react-native'

export const Button = styled(TouchableOpacity)`
  width: 46%;
  height: 50px;
  padding: 10px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_500};
    border: 1px solid ${theme.COLORS.GRAY_500};
  `}
`

export const ButtonsTitle = styled.Text`

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_100}
  `}
`