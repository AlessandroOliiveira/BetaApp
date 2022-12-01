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
  const [vv, setVv] = useState();
  const [v0v, setV0v] = useState();
  const [av, setAv] = useState();
  const [tv, setTv] = useState();
  const [solution, setSolution] = useState([]);


  //MOVIMENTO UNIFORME VARIADO  
  function funcaoMRUV(v, v0, a, t) {

    let num;

    if (v == 0) {

      num = "V = " + v0 + " + " + a + " * " + t;
      num += "V = " + v0 + " + " + (a * t);
      num += "V = " + (v0 + a * t);
      num.toString();

    } else if (v0 == 0) {

      num = "V0 = " + v + " - ( " + a + " * " + t + " ) ";
      num += "V0 = " + v + " + " + (-(a * t));
      num += "V0 = " + (v + -(a * t));
      num.toString();

    } else if (a == 0) {
      num = "a = (" + v + " - " + v0 + ") / " + t + "  ";
      num += "a = " + (s - s0) + " / " + t + "  ";
      num += "a = " + (s - s0) / t;
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
          <Title>Movimento Retilineo Uniforme Variado</Title>
          <SubTitle>V = V0 + a + t</SubTitle>
        </TextGroup>
        <InputGroup>
          <InputBox>
            <InputTitle>V =</InputTitle>
            <InputText
              type="Number"
              value={vv}
              onChangeText={(numer) => setVv(numer)}
            />
          </InputBox>
          <InputBox>
            <InputTitle>V0 =</InputTitle>
            <InputText
              value={v0v}
              onChangeText={(numer) => setV0v(numer)}
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
          v: velocidade (m/s)
          vo: velocidade inicial (m/s)
          a: aceleração (m/s2)
          t: tempo (s)
        </ModalC>
        <Box>
          <ObsText>Obs: coloque 0 no valor que quer descobrir</ObsText>
        </Box>

        <Screen>
          {solution.map((el, i) => (
            <ObsText key={i}>{el}</ObsText>
          ))}

        </Screen>
        <Button onPress={() => funcaoMRUV(vv, v0v, av, tv)}>
          <ButtonText>Calcular</ButtonText>
        </Button>

      </InnerContainer>
    </StyledContainer>
  );
}

export default MRUV;
