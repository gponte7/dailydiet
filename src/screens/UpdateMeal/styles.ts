import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native'

export interface FilterStyleProps {
  isActive?: boolean;
}

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
  gap: 24px;
`

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

export const NameInput = styled.TextInput`
  width: 100%;
  height: 48px;
  padding: 14px;
  border-radius: 6px;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const DescriptionInput = styled.TextInput`
  width: 100%;
  height: 120px;
  padding: 14px;
  border-radius: 6px;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

export const DataInput = styled.TextInput`
  width: 40%;
  height: 48px;
  padding: 14px;
  border-radius: 6px;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const DateButton = styled(TouchableOpacity)`
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

export const SelectButtonYes = styled(TouchableOpacity) <FilterStyleProps>`
  width: 46%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

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

export const SelectButtonNo = styled(TouchableOpacity) <FilterStyleProps>`
  width: 46%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

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

export const ButtonsTitle = styled.Text`

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_100}
  `}
`

export const RegisterButtonContainer = styled.View`
  padding-top: 100px;
`