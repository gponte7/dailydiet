import { TouchableOpacity } from 'react-native'

import { useNavigation, useRoute } from "@react-navigation/native";

import {
  BackButton,
  Container,
  HeaderContainer,
  StatsSubtitle,
  StatsNumber,
  StatsTitle,
  StatsBox,
  StatsContainer,
  BoxTitle,
  StatsBoxColorfulContainer,
  StatsBoxColorful
} from "./styles";

interface RouteParams {
  mealsQuantity: number;
  goodFoodQuantity: number;
  badFoodQuantity: number;
  goodFoodPercentage: number;
  goodFoodPercentageFormated: string
}

export function Stats() {
  const navigation = useNavigation()

  const route = useRoute()
  const { mealsQuantity, goodFoodQuantity, badFoodQuantity, goodFoodPercentage, goodFoodPercentageFormated } = route.params as RouteParams

  function handleBackHome() {
    navigation.navigate('home')
  }

  return (
    <>
      <HeaderContainer type={goodFoodPercentage <= 50 ? 'SECONDARY' : 'PRIMARY'}>

        <TouchableOpacity onPress={handleBackHome}>
          <BackButton type={goodFoodPercentage <= 50 ? 'SECONDARY' : 'PRIMARY'} />
        </TouchableOpacity>

        <StatsNumber>{goodFoodPercentageFormated === 'NaN' ? 'Nenhuma' : `${goodFoodPercentageFormated}%`}</StatsNumber>

        <StatsSubtitle>{goodFoodPercentageFormated === 'NaN' ? 'refeição registrada' : 'das refeições dentro da dieta'}</StatsSubtitle>

      </HeaderContainer>

      <Container>

        <StatsTitle>
          Estatísticas gerais
        </StatsTitle>

        <StatsContainer>

          <StatsBox>
            <BoxTitle>{mealsQuantity === 0 ? '0' : mealsQuantity}</BoxTitle>
            <StatsSubtitle>{mealsQuantity <= 1 ? 'refeição registrada' : 'refeições registradas'}</StatsSubtitle>
          </StatsBox>

          <StatsBoxColorfulContainer>

            <StatsBoxColorful type="PRIMARY">
              <BoxTitle>{goodFoodQuantity === 0 ? '0' : goodFoodQuantity}</BoxTitle>
              <StatsSubtitle>{goodFoodQuantity <= 1 ? 'refeição dentro da dieta' : 'refeições dentro da dieta'}</StatsSubtitle>
            </StatsBoxColorful>

            <StatsBoxColorful type="SECONDARY">
              <BoxTitle>{badFoodQuantity === 0 ? '0' : badFoodQuantity}</BoxTitle>
              <StatsSubtitle>{badFoodQuantity <= 1 ? 'refeição fora da dieta' : 'refeições fora da dieta'}</StatsSubtitle>
            </StatsBoxColorful>

          </StatsBoxColorfulContainer>

        </StatsContainer>

      </Container>
    </>
  )
}