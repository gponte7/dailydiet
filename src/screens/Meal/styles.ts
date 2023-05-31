import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'

export type BoxTypeStyleProps = 'PRIMARY' | 'SECONDARY';

interface BoxProps {
  type: BoxTypeStyleProps
}

export const Header = styled(SafeAreaView)<BoxProps>`
  height: 132px;
  padding: 24px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  flex-direction: row;
  align-items: center;
  gap: 105px;
`
export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Container = styled.View`
  flex: 1;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 104px;
  bottom: 0px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const MealTitle = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL};
    color:${theme.COLORS.GRAY_100}
  ` }
`

export const MealSubtitle = styled.Text`
  margin-bottom: 24px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    color:${theme.COLORS.GRAY_200}
  ` }
`

export const DateTitle = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color:${theme.COLORS.GRAY_100}
  ` }
`

export const DietInfo = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  width: 144px;
  height: 34px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  align-items: center;
`

export const DietInfoTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM};
    color:${theme.COLORS.GRAY_100}
  ` }
`

export const DietInfoIcon = styled(View)<BoxProps>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const ButtonsContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  gap: 9px;
`
