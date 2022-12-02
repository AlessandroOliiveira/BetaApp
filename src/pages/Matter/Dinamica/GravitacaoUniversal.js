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
  const [fgv, setFgv] = useState();
  const [mv, setMv] = useState();
  const [dv, setDv] = useState();
  const [solution, setSolution] = useState([]);

  const gcvi = "6,67*10^-11"
  const gcv = (6.67 * (Math.pow(10, -11)))
  //Lei da Gravitacao Universal  
  function funcaoLeiGravUni(fg, gcv, m, d) {

    let num;

    if (fg == 0) {

      num = "Fg = " + gcvi + " * " + m + " / " + d + "² " ;
      num += "Fg = " + (gcv * m) + " / " + d + "² ";
      num += "Fg = " + ((gcv * m) / Math.pow(d, 2));
      num.toString();

    } else if (m == 0) {

      num = "m = " + fg + " * " + d + "² " + " / " + gcvi;
      num += "m = " + (fg * Math.pow(d, 2)) + " / " + gcvi;
      num += "m = " + ((fg * Math.pow(d, 2)) / gcv);
      num.toString();

    } else if (d == 0) {
      num = "d² = " + gcvi + " * " + m + " / " + fg;
      num += "d² = " + (gcv * m) + " / " + fg;
      num += "d² = " + ((gcv * m) / fg);
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
          <Title>Lei da Gravitacao Universal</Title>
          <SubTitle>Fg = G * M / d²</SubTitle>
        </TextGroup>
        <InputGroup>
          <InputBox>
            <InputTitle>Fg =</InputTitle>
            <InputText
              type="Number"
              value={fgv}
              onChangeText={(numer) => setFgv(numer)}
            />
          </InputBox>
          <InputBox>
            <InputTitle>G =</InputTitle>
            <InputText
              value={gcvi}
              editable={false}
            />
          </InputBox>
        </InputGroup>
        <InputGroup>
          <InputBox>
            <InputTitle>M =</InputTitle>
            <InputText
              value={mv}
              onChangeText={(numer) => setMv(numer)}
            />
          </InputBox>
          <InputBox>
            <InputTitle>d =</InputTitle>
            <InputText
              active
              value={dv}
              onChangeText={(numer) => setDv(numer)}
            />
          </InputBox>
        </InputGroup>
        <ModalC>
          Fg: força gravitacional (N)  {'\n'}
          G: constante gravitacional (6,67.10-11 m3/Kg.s2)  {'\n'}
          M e m: massa dos corpos que sofrem atração entre si  {'\n'}
          d: distância entre os corpos (m)  {'\n'}
        </ModalC>
        <Box>
          <ObsText>Obs: coloque 0 no valor que quer descobrir</ObsText>
        </Box>

        <Screen>
          {solution.map((el, i) => (
            <ObsText key={i}>{el}</ObsText>
          ))}

        </Screen>
        <Button onPress={() => funcaoLeiGravUni(fgv, gcv, mv, dv)}>
          <ButtonText>Calcular</ButtonText>
        </Button>

      </InnerContainer>
    </StyledContainer>
  );
}

export default LeiGravUni;
