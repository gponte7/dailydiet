import { useState, useCallback } from "react";
import { TouchableOpacity, FlatList } from 'react-native'

import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { MealStorageDTO } from "@storage/meal/mealStorageDTO";

import { Container, Header, Logo, MealsTitleContainer, MealsTitle, StatsContainer, StatsSubtitle, StatsTitle, StatsIcon, MealsDateTitle } from "./styles";

import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import { ListEmpty } from "@components/ListEmpty";

import { MealSubtitle } from "@screens/Meal/styles";

import LogoImg from '@assets/logo.png'

import { dateFormatter } from "@utils/dateFormatter";

export function Home() {
  const [meals, setMeals] = useState<MealStorageDTO[]>([])

  const goodFoodQuantity = meals.filter(meal => meal.mealType !== 'Bad').length
  const badFoodQuantity = meals.filter(meal => meal.mealType !== 'Good').length

  const goodFoodPercentage = ((goodFoodQuantity * 100) / meals.length)
  const goodFoodPercentageFormated = goodFoodPercentage.toFixed(2).replace('.', ',')

  const navigation = useNavigation()

  function handleNewMeal() {
    navigation.navigate('new')
  }

  function handleOpenMeal(meal: string, mealDescription: string, mealDate: Date, mealType: string) {
    navigation.navigate('meal', { mealName: meal, description: mealDescription, date: mealDate, mealType })
  }

  function handleOpenStats() {
    navigation.navigate('stats', { mealsQuantity: meals.length, goodFoodQuantity, badFoodQuantity, goodFoodPercentage, goodFoodPercentageFormated })
  }

  async function fetchMeals() {
    try {
      const data = await mealsGetAll()
      setMeals(data)
    } catch (error) {
      throw error
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()
  }, []))


  return (
    <Container>
      <Header>
        <Logo source={LogoImg} />
      </Header>

      <StatsContainer type={goodFoodPercentage <= 50 ? 'SECONDARY' : 'PRIMARY'} onPress={() => handleOpenStats()}>
        <StatsIcon type={goodFoodPercentage <= 50 ? 'SECONDARY' : 'PRIMARY'} />
        <StatsTitle>{goodFoodPercentageFormated === 'NaN' ? 'Nenhuma' : `${goodFoodPercentageFormated}%`}</StatsTitle>
        <StatsSubtitle>{goodFoodPercentageFormated === 'NaN' ? 'refeição registrada' : 'das refeições dentro da dieta'}</StatsSubtitle>
      </StatsContainer>


      <MealsTitleContainer>
        <MealsTitle>Refeições</MealsTitle>
        <Button title='+ Nova refeição' onPress={handleNewMeal} />
      </MealsTitleContainer>

      <FlatList
        data={meals}
        keyExtractor={(item) => item.name}
        
        renderItem={({ item }) => (
          <>
            <MealsDateTitle>{dateFormatter(item.date).formattedDate}</MealsDateTitle>
            <TouchableOpacity onPress={() => handleOpenMeal(item.name, item.description, item.date, item.mealType)}>
              <MealCard hour={dateFormatter(item.date).formattedTime} title={item.name} mealType={item.mealType} />
            </TouchableOpacity>
          </>
        )}

        contentContainerStyle={meals.length === 0 && { flex: 1 }}

        ListEmptyComponent={() => (
          <ListEmpty
            message="Você ainda não registrou refeições" />
        )}
        showsVerticalScrollIndicator={false}
      />

    </Container>
  )
}
