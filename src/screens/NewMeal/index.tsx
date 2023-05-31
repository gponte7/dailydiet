import { useState, useEffect } from 'react'
import { Platform, Alert } from 'react-native'

import { useNavigation } from "@react-navigation/native";

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


export function NewMeal() {
  const [meal, setMeal] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState<Date>(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [textDate, setTextDate] = useState('Data')
  const [textTime, setTextTime] = useState('Hora')
  const [mealType, setMealType] = useState('')

  const navigation = useNavigation()

  function handleSelectedDate(event: DateTimePickerEvent, selectedDate: Date) {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)

    const formattedDate = dateFormatter(currentDate).formattedDate
    const formattedTime = dateFormatter(currentDate).formattedTime

    setTextDate(formattedDate)
    setTextTime(formattedTime)
  }

  function initialDate() {
    const currentDate = date
    setDate(currentDate)

    const formattedDate = dateFormatter(currentDate).formattedDate
    const formattedTime = dateFormatter(currentDate).formattedTime

    setTextDate(formattedDate)
    setTextTime(formattedTime)
  }

  function handleShowMode(currentMode: string) {
    setShow(true)
    setMode(currentMode)
  }

  async function handleNewMeal() {
    try {

      const newMeal = {
        name: meal,
        description,
        date,
        mealType,
      }

      if (meal === '' || description === '' || date === undefined || mealType === '') {
        Alert.alert('Os dados precisam ser preenchidos')
      } else {
        if (mealType === 'Good') {
          await mealCreate(newMeal)
          navigation.navigate('positive')
        } else if (mealType === 'Bad') {
          await mealCreate(newMeal)
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
      <MealHeader title="Nova Refeição" />

      <AllInputsContainer>

        <NameInput setMeal={setMeal} />

        <DescriptionInput setDescription={setDescription} />

        <DateInput
          date={date}
          mode={mode}
          show={show}
          textDate={textDate}
          textTime={textTime}
          handleSelectedDate={handleSelectedDate}
          handleShowMode={handleShowMode}
        />

        <MealTypeInput mealType={mealType} setMealType={setMealType} />

        <RegisterButtonContainer>
          <Button title="Cadastrar refeição" onPress={handleNewMeal} />
        </RegisterButtonContainer>

      </AllInputsContainer >
    </>
  )
}