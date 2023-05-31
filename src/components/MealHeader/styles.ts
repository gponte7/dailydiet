import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from 'react-native'

export const Header = styled(SafeAreaView)`
  height: 132px;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex-direction: row;
  justify-content: center;
`
export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const IconContainer = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
  top: 56px;
`

export const HeaderIcon = styled(ArrowLeft).attrs(({ theme}) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
`