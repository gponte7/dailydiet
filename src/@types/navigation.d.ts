import { MealStorageDTO } from "@storage/meal/mealStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      stats: {
        mealsQuantity: number;
        goodFoodQuantity: number;
        badFoodQuantity: number;
        goodFoodPercentage: number;
        goodFoodPercentageFormated: string;
      }
      new: undefined;
      meal: {
        mealName: string;
        description: string;
        date: Date;
        mealType: string;
      }
      positive: undefined;
      negative: undefined;
      update: {
        mealName: string;
        description: string;
        date: Date;
        mealType: string;
      }
    }
  }
}