import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'

import { ArrowLeft } from "phosphor-react-native";

export type BoxTypeStyleProps = 'PRIMARY' | 'SECONDARY';

interface BoxProps {
  type: BoxTypeStyleProps
}

export const HeaderContainer = styled(SafeAreaView)<BoxProps>`
  height: 200px;
  padding: 24px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`

export const Container = styled.View`
  flex: 1;
  padding: 33px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  position: absolute;
  left: 0px;
  right: 0px;
  top: 168px;
  bottom: 0px;
`

export const BackButton = styled(ArrowLeft).attrs<BoxProps>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
`

export const StatsNumber = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-align: center;
`

export const StatsSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  text-align: center;
`
export const StatsTitle = styled.Text`
  text-align: center;
  ${({ theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const StatsContainer = styled.View`
  padding: 23px 0 0 0;
  gap: 12px;
`

export const StatsBox = styled.View`
  width: 100%;
  height: 89px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const BoxTitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const StatsBoxColorfulContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const StatsBoxColorful = styled.View <BoxProps>`
  width: 165px;
  height: 107px;
  padding: 16px;
  border-radius: 8px;
  justify-content: center;
  gap: 8px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID}; 
`