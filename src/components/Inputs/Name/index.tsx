import { InputContainer, InputTitle } from "../styles";
import { Input } from './styles'

interface NameInputProps {
  setMeal: () => void
  defaultValue?: string
}

export function NameInput({ setMeal, defaultValue }: NameInputProps) {
  return (
    <InputContainer>
      <InputTitle>Nome</InputTitle>
      <Input
        placeholder="Digite o que você comeu"
        onChangeText={setMeal}
        defaultValue={defaultValue}
        returnKeyType="done"
      />
    </InputContainer>
  )
}