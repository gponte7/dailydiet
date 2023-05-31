import styled, { css } from "styled-components/native";
import { View } from 'react-native'

export type MealTypeStyleProps = 'PRIMARY' | 'SECONDARY'

interface MealProps {
  type: MealTypeStyleProps
}

export const Container = styled.View`
  width: 100%;
  padding: 14px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  gap: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const MealHour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  `}
`


export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.GRAY_200};
  `}
`

export const Indicator = styled(View) <MealProps>`
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`
