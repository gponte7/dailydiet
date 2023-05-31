import { Container, Indicator, MealHour, Title } from "./styles";

interface MealCardProps {
  hour: string
  title: string
  mealType: string
}

export function MealCard({hour, title, mealType}: MealCardProps){
  return (
    <Container>
      <Title><MealHour>{hour} </MealHour><Title style={{color: '#DDDEDF'}}> | </Title> {title}</Title>
      <Indicator type={mealType === 'Good' ? 'PRIMARY' : 'SECONDARY'}></Indicator>
    </Container>
  )
}