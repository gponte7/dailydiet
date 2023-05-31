import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { ArrowUpRight } from "phosphor-react-native";

export type StatsTypeStyleProps = 'PRIMARY' | 'SECONDARY';

interface StatsProps {
  type: StatsTypeStyleProps
}

export const Container = styled(SafeAreaView)`
  flex:1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
`

export const Header = styled.View`
  width: 100%;
  justify-content: flex-start;
  flex-direction: row;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const StatsContainer = styled(TouchableOpacity)<StatsProps>`
  width: 100%;
  height: 102px;
  margin-top: 33px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`

export const StatsIcon = styled(ArrowUpRight).attrs<StatsProps>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const StatsTitle = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const StatsSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`
export const MealsTitleContainer = styled.View`
  margin-top: 40px;
  height: 90px;
  margin-bottom: 20px;
  gap: 8px;
`

export const MealsTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
`

export const MealsContainer = styled.View`
  gap: 8px;
`

export const MealsDateTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  `}
`