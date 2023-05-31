import styled, { css } from "styled-components/native";
import { TouchableOpacity, Text } from 'react-native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

interface ButtonProps {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity) <ButtonProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700};

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`

export const Title = styled(Text) <ButtonProps>`
  color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_200};

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`