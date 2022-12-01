import React, { useState } from "react";

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
import ModalC from "../../../components/Modal";


const ForcaR = () => {
  const [frv, setFrv] = useState();
  const [mv, setMv] = useState();
  const [av, setAv] = useState();
  const [solution, setSolution] = useState([]);


  //MOVIMENTO UNIFORME VARIADO  
  function funcaoForcaR(fr, m, a) {

    let num;

    if (fr == 0) {

      num = "Fr = " + m + " * " + a;
      num += "Fr = " + (m * a);
      num.toString();

    } else if (m == 0) {

      num = "m = " + fr + " / " + a;
      num += "m = " + (fr / a);
      num.toString();

    } else if (a == 0) {
      num = "a = " + fr + " / " + m;
      num += "a = " + (fr / m);
      num.toString();

    }


    let ride = num.split("  ");

    return setSolution(ride);

  }

  return (
    <StyledContainer>
      <InnerContainer>
        <Box>

        </Box>
        <TextGroup>
          <Title>Força resultante da 2ª lei de Newton </Title>
          <SubTitle>Fr = m * a</SubTitle>
        </TextGroup>
        <InputGroup>
          <InputBox>
            <InputTitle>Fr =</InputTitle>
            <InputText
              type="Number"
              value={frv}
              onChangeText={(numer) => setFrv(numer)}
            />
          </InputBox>
          <InputBox>
            <InputTitle>m =</InputTitle>
            <InputText
              value={mv}
              onChangeText={(numer) => setMv(numer)}
            />
          </InputBox>
        </InputGroup>
        <InputGroup>
          <InputBox>
            <InputTitle>a =</InputTitle>
            <InputText
              value={av}
              onChangeText={(numer) => setAv(numer)}
            />
          </InputBox>

        </InputGroup>
        <ModalC>
          FR: força resultante (N) <br/>
          m: massa do corpo (kg) <br/>
          a: aceleração do corpo (m/s2) <br/>
        </ModalC>
        <Box>
          <ObsText>Obs: coloque 0 no valor que quer descobrir</ObsText>
        </Box>

        <Screen>
          {solution.map((el, i) => (
            <ObsText key={i}>{el}</ObsText>
          ))}

        </Screen>
        <Button onPress={() => funcaoForcaR(frv, mv, av)}>
          <ButtonText>Calcular</ButtonText>
        </Button>

      </InnerContainer>
    </StyledContainer>
  );
}

export default ForcaR;
