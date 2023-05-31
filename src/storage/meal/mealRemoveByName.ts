import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealRemoveByName(mealDeleted: string){
  try{
    const storedMeals = await mealsGetAll()
    const meals = storedMeals.filter(meal => meal.name !== mealDeleted)

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals))
  }catch(error){
    throw error
  }
}