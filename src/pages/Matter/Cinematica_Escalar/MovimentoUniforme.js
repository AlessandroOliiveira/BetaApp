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

const MRU = () => {
  const [sv, setSv] = useState();
  const [s0v, setS0v] = useState();
  const [vv, setVv] = useState();
  const [tv, setTv] = useState();
  const [solution, setSolution] = useState([]);


  function funcaoHorariaMU(s, s0, v, t) {





    let num;

    if (s == 0) {
      num = "S = " + s0 + " + " + v + " * " + t + "  ";
      num += "S = " + s0 + " + " + v * t + "  ";
      num += "S = " + (s0 + v * t);
      num.toString();
    } else if (s0 == 0) {
      num = "s0 = " + s + " - " + v + " * " + t + "  ";
      num += "s0 = " + s + " - " + v * t + "  ";
      num += "s0 = " + (s - v * t);
      num.toString();
    } else if (v == 0) {
      num = "v = (" + s + " - " + s0 + ") / " + t + "  ";
      num += "v = " + (s - s0) + " / " + t + "  ";
      num += "v = " + (s - s0) / t;
      num.toString();
    } else if (t == 0) {
      num = "v = (" + s + " - " + s0 + ") / " + v + "  ";
      num += "v = " + (s - s0) + " / " + v + "  ";
      num += "v = " + (s - s0) / v;

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
          <Title>Movimento Retilineo Uniforme</Title>
          <SubTitle>S= s0 + v * t</SubTitle>
        </TextGroup>
        <InputGroup>
          <InputBox>
            <InputTitle>S =</InputTitle>
            <InputText
              type="Number"
              value={sv}
              onChangeText={(numer) => setSv(numer)}
            />
          </InputBox>
          <InputBox>
            <InputTitle>s0 =</InputTitle>
            <InputText
              value={s0v}
              onChangeText={(numer) => setS0v(numer)}
            />
          </InputBox>
        </InputGroup>
        <InputGroup>
          <InputBox>
            <InputTitle>v =</InputTitle>
            <InputText
              value={vv}
              onChangeText={(numer) => setVv(numer)}
            />
          </InputBox>
          <InputBox>
            <InputTitle>t =</InputTitle>
            <InputText
              active
              value={tv}
              onChangeText={(numer) => setTv(numer)}
            />
          </InputBox>
        </InputGroup>
        <ModalC>
          testeeeeee
        </ModalC>
        <Box>
          <ObsText>Obs: coloque 0 no valor que quer descobrir</ObsText>
        </Box>

        <Screen>
          {solution.map((el, i) => (
            <ObsText key={i}>{el}</ObsText>
          ))}

        </Screen>
        <Button onPress={() => funcaoHorariaMU(sv, s0v, vv, tv)}>
          <ButtonText>Calcular</ButtonText>
        </Button>

      </InnerContainer>
    </StyledContainer>
  );
};

export default MRU;
