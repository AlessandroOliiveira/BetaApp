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
import { Image } from "react-native";

const Kepler = () => {
  return (
    <StyledContainer>
      <InnerContainer>
        <Box>
          <Image source={require("../../../assets/Img/LogoIfap.png")} />
        </Box>
        <TextGroup>
          <Title>3º Lei de Kepler</Title>
          <SubTitle>T1² / R1³ = T2²/ R2³</SubTitle>
        </TextGroup>
        <InputGroup>
          <InputBox>
            <InputTitle>T1² =</InputTitle>
            <InputText />
          </InputBox>
          <InputBox>
            <InputTitle>R1³ =</InputTitle>
            <InputText />
          </InputBox>
        </InputGroup>
        <InputGroup>
          <InputBox>
            <InputTitle>T2² =</InputTitle>
            <InputText />
          </InputBox>
          <InputBox>
            <InputTitle>R2³ =</InputTitle>
            <InputText />
          </InputBox>
        </InputGroup>
        <Box>
          <ObsText>Obs: coloque 0 no valor que quer descobrir</ObsText>
        </Box>
        <Screen></Screen>
        <Button onPress={console.log("apertou")}>
          <ButtonText>Calcular</ButtonText>
        </Button>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Kepler;
