import { InputContainer, InputTitle } from "../styles";
import { Input } from "./styles";

interface DescriptionProps {
  setDescription: () => void
  defaultValue?: string
}

export function DescriptionInput({ setDescription, defaultValue }: DescriptionProps) {
  return (
    <InputContainer>
      <InputTitle>Descrição</InputTitle>
      <Input
        placeholder="Descreva a refeição"
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        onChangeText={setDescription}
        defaultValue={defaultValue}
      />
    </InputContainer>
  )
}