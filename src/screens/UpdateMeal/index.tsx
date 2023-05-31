import { useState, useEffect } from 'react'
import { Platform, Alert } from 'react-native'

import { useNavigation, useRoute } from "@react-navigation/native";

import { mealCreate } from "@storage/meal/mealCreate";

import { DateTimePickerEvent } from "@react-native-community/datetimepicker";

import { dateFormatter } from "@utils/dateFormatter";

import { Button } from "@components/Button";
import { MealHeader } from "@components/MealHeader";
import { NameInput } from "@components/Inputs/Name";
import { DescriptionInput } from "@components/Inputs/Description";
import { AllInputsContainer, RegisterButtonContainer } from "@components/Inputs/styles";
import { DateInput } from "@components/Inputs/Date";
import { MealTypeInput } from "@components/Inputs/MealType";
import { mealRemoveByName } from '@storage/meal/mealRemoveByName';

interface RouteParams {
  mealName: string
  description: string;
}

export function UpdateMeal() {
  const [newMeal, setNewMeal] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newDate, setNewDate] = useState<Date>(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [textDate, setTextDate] = useState('Data')
  const [textTime, setTextTime] = useState('Hora')
  const [newMealType, setNewMealType] = useState('')

  const navigation = useNavigation()

  const route = useRoute()
  const { mealName, description } = route.params as RouteParams

  function initialDate() {
    const currentDate = newDate
    setNewDate(currentDate)

    const formattedDate = dateFormatter(currentDate).formattedDate
    const formattedTime = dateFormatter(currentDate).formattedTime

    setTextDate(formattedDate)
    setTextTime(formattedTime)
  }

  function handleSelectedDate(event: DateTimePickerEvent, selectedDate: Date) {
    const currentDate = selectedDate || newDate
    setShow(Platform.OS === 'ios')
    setNewDate(currentDate)

    const formattedDate = dateFormatter(currentDate).formattedDate
    const formattedTime = dateFormatter(currentDate).formattedTime

    setTextDate(formattedDate)
    setTextTime(formattedTime)
  }

  function handleShowMode(currentMode: string) {
    setShow(true)
    setMode(currentMode)
  }

  async function handleUpdateMeal(mealName: string) {
    await mealRemoveByName(mealName)

    try {
      const updatedMeal = {
        name: newMeal,
        description: newDescription,
        date: newDate,
        mealType: newMealType,
      }

      if (newMeal === '' || newDescription === '' || newDate === undefined || newMealType === '') {
        Alert.alert('Editar refeição', 'Os dados precisam ser preenchidos ou alterados.')
      } else {
        if (newMealType === 'Good') {
          await mealCreate(updatedMeal)
          navigation.navigate('positive')
        } else if (newMealType === 'Bad') {
          await mealCreate(updatedMeal)
          navigation.navigate('negative')
        }
      }

    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    initialDate()
  }, [])

  return (
    <>
      <MealHeader title="Editar Refeição" />

      <AllInputsContainer>

        <NameInput setMeal={setNewMeal} defaultValue={mealName} />

        <DescriptionInput setDescription={setNewDescription} defaultValue={description} />

        <DateInput
          date={newDate}
          mode={mode}
          show={show}
          textDate={textDate}
          textTime={textTime}
          handleSelectedDate={handleSelectedDate}
          handleShowMode={handleShowMode}
        />

        <MealTypeInput mealType={newMealType} setMealType={setNewMealType} />

        <RegisterButtonContainer>
          <Button title="Salvar alterações" onPress={() => handleUpdateMeal(mealName)} />
        </RegisterButtonContainer>

      </AllInputsContainer>
    </>
  )
}