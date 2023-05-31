import styled, { css } from "styled-components/native"
import { TouchableOpacity, View } from 'react-native'

export type IndicatorStyleProps = 'PRIMARY' | 'SECONDARY'

export interface IndicatorProps {
  type: IndicatorStyleProps
}

export interface FilterStyleProps {
  isActive?: boolean;
}

export const Indicator = styled(View) <IndicatorProps>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const SelectButtonYes = styled(TouchableOpacity)<FilterStyleProps>`
  width: 46%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  flex-direction: row;
  gap: 8px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD};
  `}

  ${({ theme, isActive }) => isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_DARK};
    background-color: ${theme.COLORS.GREEN_MID};
  `}
`

export const SelectButtonNo = styled(TouchableOpacity)<FilterStyleProps>`
  width: 46%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  flex-direction: row;
  gap: 8px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD};
  `}

  ${({ theme, isActive = false }) => isActive && css`
    border: 1px solid ${theme.COLORS.RED_DARK};
    background-color: ${theme.COLORS.RED_MID};
  `}
`