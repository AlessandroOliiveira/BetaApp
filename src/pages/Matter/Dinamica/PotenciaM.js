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

const LeiGravUni = () => {
  const [pmv, setPmv] = useState();
  const [dtv, setDtv] = useState();
  const [dev, setDev] = useState();
  const [solution, setSolution] = useState([]);


  //Potencia Mecanica
  function funcaoLeiGravUni(pm, de, dt) {

    let num;

    if (pm == 0) {

      num = "Pm = " + de + " / " + dt;
      num += "Pm = " + (de / dt);
      num.toString();

    } else if (de == 0) {


      num = "ΔE = " + dt + " * " + pm;
      num += "ΔE = " + (dt * pm);
      num.toString();

    } else if (d == 0) {

      num = "Δt = " + de + " / " + pm;
      num += "Δt = " + (de / pm);
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
          <Title>Potencia Mecanica</Title>
          <SubTitle>Pm = ΔE / Δt</SubTitle>
        </TextGroup>
        <InputGroup>
          <InputBox>
            <InputTitle>Pm =</InputTitle>
            <InputText
              type="Number"
              value={pmv}
              onChangeText={(numer) => setPmv(numer)}
            />
          </InputBox>
          <InputBox>
            <InputTitle>ΔE =</InputTitle>
            <InputText
              value={dev}
              onChangeText={(numer) => setDev(numer)}
            />
          </InputBox>
        </InputGroup>
        <InputGroup>
          <InputBox>
            <InputTitle>Δt =</InputTitle>
            <InputText
              value={dtv}
              onChangeText={(numer) => setDtv(numer)}
            />
          </InputBox>
        </InputGroup>
        <ModalC>
          ΔE: variação de energia (J) {'\n'}
          Δt: variação de tempo (s) {'\n'}
        </ModalC>
        <Box>
          <ObsText>Obs: coloque 0 no valor que quer descobrir</ObsText>
        </Box>

        <Screen>
          {solution.map((el, i) => (
            <ObsText key={i}>{el}</ObsText>
          ))}

        </Screen>
        <Button onPress={() => funcaoLeiGravUni(pmv, dev, dtv)}>
          <ButtonText>Calcular</ButtonText>
        </Button>

      </InnerContainer>
    </StyledContainer>
  );
}

export default LeiGravUni;
