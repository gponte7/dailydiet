import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { NewMeal } from '@screens/NewMeal'
import { Meal } from '@screens/Meal'
import { Stats } from '@screens/Stats'
import { PositiveFeedback } from '@screens/PositiveFeedback'
import { NegativeFeedback } from '@screens/NegativeFeedback'
import { UpdateMeal } from '@screens/UpdateMeal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="stats"
        component={Stats}
      />

      <Screen
        name="new"
        component={NewMeal}
      />

      <Screen
        name="meal"
        component={Meal}
      />

      <Screen
        name="positive"
        component={PositiveFeedback}
      />

      <Screen
        name="negative"
        component={NegativeFeedback}
      />

      <Screen
        name="update"
        component={UpdateMeal}
      />


    </Navigator>
  )
}