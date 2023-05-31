import { Container, Title, ButtonTypeStyleProps } from "./styles";

interface ButtonProps {
  title: string;
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'PRIMARY', ...rest }: ButtonProps){
  return (
    <Container type={type} {...rest}>
      <Title type={type}>
        {title}
      </Title>
    </Container>
  )
}