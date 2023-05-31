import { InputContainer, InputTitle, RowContainer } from "../styles";
import { Button, ButtonsTitle } from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker';

interface DateProps {
  textDate: string
  textTime: string
  show: boolean
  date: Date
  mode: string
  handleShowMode: (showMode: string) => void
  handleSelectedDate: () => void
}

export function DateInput({ handleShowMode, handleSelectedDate, textDate, textTime, show, date, mode }: DateProps) {
  return (
    <InputContainer>

      <InputTitle>Selecione a data e a hora:</InputTitle>
      
      <RowContainer>

        <Button onPress={() => handleShowMode('date')}>
          <ButtonsTitle>{textDate}</ButtonsTitle>
        </Button>

        <Button onPress={() => handleShowMode('time')}>
          <ButtonsTitle>{textTime}</ButtonsTitle>
        </Button>
        
      </RowContainer>

      <RowContainer>

        {show && (
          <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={handleSelectedDate}

          />
        )}

      </RowContainer>

    </InputContainer>
  )
}