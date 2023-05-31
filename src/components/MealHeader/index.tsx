import { useNavigation } from "@react-navigation/native";
import { Header, HeaderIcon, HeaderTitle, IconContainer } from "./styles";

interface HeaderProps {
  title: string
}

export function MealHeader({title}: HeaderProps){
  const navigation = useNavigation()

  function handleBackHome() {
    navigation.navigate('home')
  }

  return (
    <Header>
        <IconContainer onPress={() => handleBackHome()}>
          <HeaderIcon />
        </IconContainer>
        <HeaderTitle>
          {title}
        </HeaderTitle>
      </Header>
  )
}