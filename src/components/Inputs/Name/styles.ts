import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native'

export interface FilterStyleProps {
  isActive?: boolean;
}

export const InputsContainer = styled.View`
  gap: 4px;
`

export const InputTitle = styled.Text`
  margin-bottom: 4px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_200};
  `}
`

export const Input = styled.TextInput`
  width: 100%;
  height: 48px;
  padding: 14px;
  border-radius: 6px;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};
  `}
`