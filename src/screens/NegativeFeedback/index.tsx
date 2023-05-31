import { useNavigation } from "@react-navigation/native";

import { Container, FeedbackImage, SubTitle, Title } from "./styles";
import Img from '@assets/negativeImage.png'

import { Button } from "@components/Button";


export function NegativeFeedback() {
  const navigation = useNavigation()

  function handleBackHome() {
    navigation.navigate('home')
  }

  return (
    <Container>

      <Title>
        Que pena!
      </Title>

      <SubTitle>
        Você <SubTitle style={{fontWeight: 'bold'}}>saiu da dieta</SubTitle> dessa vez, mas continue se esforçando e não desista!
      </SubTitle>

      <FeedbackImage source={Img} />

      <Button title="Ir para a página inicial" style={{ width: 191 }} onPress={handleBackHome} />
    
    </Container>
  )
}