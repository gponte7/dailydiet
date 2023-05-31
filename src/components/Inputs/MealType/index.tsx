import { ButtonsTitle } from "../Date/styles";
import { InputContainer, InputTitle, RowContainer } from "../styles";
import { SelectButtonYes, SelectButtonNo, Indicator } from "./styles";

interface MealTypeInputProps {
  mealType: string
  setMealType: (mealType: string) => void
}

export function MealTypeInput({ mealType, setMealType }: MealTypeInputProps) {
  return (
    <InputContainer>

      <InputTitle>Está dentro da dieta?</InputTitle>

      <RowContainer>

        <SelectButtonYes onPress={() => setMealType('Good')} isActive={mealType === 'Good'}>
          <Indicator type='PRIMARY' />
          <ButtonsTitle>
            Sim
          </ButtonsTitle>
        </SelectButtonYes>

        <SelectButtonNo onPress={() => setMealType('Bad')} isActive={mealType === 'Bad'}>
          <Indicator type='SECONDARY' />
          <ButtonsTitle>
            Não
          </ButtonsTitle>
        </SelectButtonNo>

      </RowContainer>

    </InputContainer>
  )
}