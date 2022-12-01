import React from "react";

import {
  StyledContainer,
  InnerContainer,
  Box,
  Screen,
} from "../../../components/styles/BaseConteinerStyles";
import {
  Title,
  SubTitle,
  ObsText,
  ButtonText,
  TextGroup,
} from "../../../components/styles/TextStyles";
import { Button } from "../../../components/styles/ButtonStyles";
import {
  InputBox,
  InputText,
  InputTitle,
  InputGroup,
} from "../../../components/styles/InputStyles";

const MRUV = () => {
  const [tv, setTv] = useState(Number);
  const [t1v, setT1v] = useState(Number);
  const [t2v, setT2v] = useState(Number);

  //MOVIMENTO UNIFORME VARIADO  1.25 5 4
  function aceleracaoMedia(t, t1, t2) {
    //am = v/t;
    //num = am*t
    //num = v/am;

    let num, value;

    if (t == 0) {
      value = t1 - t2;

      num = "am = " + t1 + " / " + t2 + "  ";
      num += "am = " + t1 + " / " + t2 + "  ";
      num += "am = " + t1 / t2;
      num.toString();
    } else if (t1 == 0) {
      value = t * t2;

      num = "v = " + t + " * " + t2 + "  ";
      num += "v = " + t + " * " + t2 + "  ";
      num += "v = " + t * t2;
      num.toString();
    } else if (t2 == 0) {
      value = t1 / t;

      num = "t = " + t1 + " / " + t + "  ";
      num += "t = " + t1 + " / " + t + "  ";
      num += "t = " + t1 / t;
      num.toString();
    }

    if (value < 0) {
      return "Não existe aceleração negativa";
    } else {
      let ride = num.split("  ");

      return ride;
    }
  }
  return (
    <StyledContainer>
      <InnerContainer>
        <Box>
         
        </Box>
        <TextGroup>
          <Title>Movimento Retilineo Uniforme Variado</Title>
          <SubTitle>V = Vo + a * t</SubTitle>
        </TextGroup>
        <InputGroup>
          <InputBox>
            <InputTitle>V =</InputTitle>
            <InputText type="Number"
              value={sv}
              onChangeText={(numer) => setSv(Number(numer))} />
          </InputBox>
          <InputBox>
            <InputTitle>Vo =</InputTitle>
            <InputText />
          </InputBox>
        </InputGroup>
        <InputGroup>
          <InputBox>
            <InputTitle active>a =</InputTitle>
            <InputText />
          </InputBox>
          <InputBox>
            <InputTitle active>t =</InputTitle>
            <InputText />
          </InputBox>
        </InputGroup>
        <Box>
          <ObsText>Obs: coloque x no valor que quer descobrir</ObsText>
        </Box>
        <Screen></Screen>
        <Button onPress={console.log("apertou")}>
          <ButtonText>Calcular</ButtonText>
        </Button>
      </InnerContainer>
    </StyledContainer>
  );
};

export default MRUV;
