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

const Trabalho = () => {
  const [tv, setTv] = useState();
  const [fv, setFv] = useState();
  const [dv, setDv] = useState();
  const [cosOv, setCosOv] = useState();
  const [solution, setSolution] = useState([]);


  //MOVIMENTO UNIFORME VARIADO  
  function funcaoTrabalho(t, f, d, cosO) {

    let num;

    if (t == 0) {

      num = "τ = " + f + " * " + d + " * " + "cos( " + cosO + " )";
      num += "τ = " + (f * d * Math.cos(cosO));
      num.toString();

    } else if (f == 0) {

      num = "f = " + t + " / " + d + " * " + "cos( " + cosO + " )";
      num += "f = " + t + " / " + (d * Math.cos(cosO));
      num += "f = " + (t / (d * Math.cos(cosO)));
      num.toString();

    } else if (d == 0) {
      num = "d = " + t + " / " + f + " * " + "cos( " + cosO + " )";
      num += "d = " + t + " / " + (f * Math.cos(cosO));
      num += "d = " + (t / (f * Math.cos(cosO)));
      num.toString();

    } else if (t == 0) {
      num = "cos( " + cosO + " ) = " + t + " / " + f + " * " + d;
      num += "cos( " + cosO + " ) = " + t + " / " + (f * d);
      num += "cos( " + cosO + " ) = " + (t / (f * d));

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
          <Title>Trabalho</Title>
          <SubTitle>τ = F * d * cosθ </SubTitle>
        </TextGroup>
        <InputGroup>
          <InputBox>
            <InputTitle>τ =</InputTitle>
            <InputText
              type="Number"
              value={tv}
              onChangeText={(numer) => setTv(numer)}
            />
          </InputBox>
          <InputBox>
            <InputTitle>F =</InputTitle>
            <InputText
              value={fv}
              onChangeText={(numer) => setFv(numer)}
            />
          </InputBox>
        </InputGroup>
        <InputGroup>
          <InputBox>
            <InputTitle>d =</InputTitle>
            <InputText
              value={dv}
              onChangeText={(numer) => setDv(numer)}
            />
          </InputBox>
          <InputBox>
            <InputTitle>t =</InputTitle>
            <InputText
              active
              value={cosOv}
              onChangeText={(numer) => setCosOv(numer)}
            />
          </InputBox>
        </InputGroup>
        <ModalC>
          F: força (N) <br/>
          τ: trabalho (J) <br/>
          d: deslocamento do corpo (m) <br/>
          θ: ângulo entre a força e o deslocamento (°) <br/>
        </ModalC>
        <Box>
          <ObsText>Obs: coloque 0 no valor que quer descobrir</ObsText>
        </Box>

        <Screen>
          {solution.map((el, i) => (
            <ObsText key={i}>{el}</ObsText>
          ))}

        </Screen>
        <Button onPress={() => funcaoTrabalho(tv, fv, dv, cosOv)}>
          <ButtonText>Calcular</ButtonText>
        </Button>

      </InnerContainer>
    </StyledContainer>
  );
}

export default Trabalho;
