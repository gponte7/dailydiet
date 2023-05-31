import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { ButtonsContainer, Container, DateTitle, DietInfo, DietInfoIcon, DietInfoTitle, MealSubtitle, MealTitle } from "./styles";

import { Button } from "@components/Button";
import { MealHeader } from "@components/MealHeader";

import { mealRemoveByName } from "@storage/meal/mealRemoveByName";

import { dateFormatter } from "@utils/dateFormatter";

interface RouteParams {
  mealName: string
  description: string;
  date: Date;
  mealType: string;
}

export function Meal() {
  const navigation = useNavigation()

  const route = useRoute()
  const { mealName, description, date, mealType } = route.params as RouteParams

  const formattedDate = dateFormatter(date).formattedDate
  const formattedTime = dateFormatter(date).formattedTime

  function handleMealUpdate() {
    navigation.navigate('update', { mealName, description, date, mealType })
  }

  async function mealRemove(mealName: string) {
    try {
      await mealRemoveByName(mealName)
      navigation.navigate('home')
    } catch (error) {
      throw error
    }
  }

  async function handleMealRemove() {
    Alert.alert(
      'Remover refeição',
      `Deseja remover a refeição "${mealName}"?`,
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => mealRemove(mealName) }
      ]
    )
  }

  return (
    <>
      <MealHeader title="Refeição" />

      <Container>

        <MealTitle>
          {mealName}
        </MealTitle>

        <MealSubtitle>
          {description}
        </MealSubtitle>

        <DateTitle>
          Data e hora
        </DateTitle>

        <MealSubtitle>
          {`${formattedDate} às ${formattedTime}`}
        </MealSubtitle>

        <DietInfo>
          <DietInfoIcon
            type={mealType === 'Good' ? 'PRIMARY' : 'SECONDARY'}>
          </DietInfoIcon>

          <DietInfoTitle>
            {mealType === 'Good' ? 'dentro da dieta' : 'fora da dieta'}
          </DietInfoTitle>
        </DietInfo>

        <ButtonsContainer>
          <Button title="Editar Refeição" onPress={handleMealUpdate} />

          <Button title="Excluir Refeição" type="SECONDARY" onPress={handleMealRemove} />
        </ButtonsContainer>

      </Container>
    </>
  )
}