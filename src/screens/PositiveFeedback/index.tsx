import { useNavigation } from "@react-navigation/native";

import { Container, FeedbackImage, SubTitle, Title } from "./styles";
import Img from '@assets/positiveImage.png'

import { Button } from "@components/Button";


export function PositiveFeedback() {
  const navigation = useNavigation()

  function handleBackHome() {
    navigation.navigate('home')
  }

  return (
    <Container>

      <Title>
        Continue assim!
      </Title>

      <SubTitle>
        Você continua <SubTitle style={{fontWeight: 'bold'}}>dentro da dieta</SubTitle>. Muito bem!
      </SubTitle>

      <FeedbackImage source={Img} />

      <Button title="Ir para a página inicial" style={{ width: 191 }} onPress={handleBackHome} />
   
    </Container>
  )
}