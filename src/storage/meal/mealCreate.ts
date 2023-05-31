import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";
import { MealStorageDTO } from "./mealStorageDTO";


export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll()

    const storage = JSON.stringify([...storedMeals, newMeal])

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)

  } catch (error) {
    throw error
  }
}