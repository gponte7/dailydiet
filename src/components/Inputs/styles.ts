import styled, { css } from "styled-components/native"

export const AllInputsContainer = styled.View`
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

export const InputContainer = styled.View`
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

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

export const RegisterButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`