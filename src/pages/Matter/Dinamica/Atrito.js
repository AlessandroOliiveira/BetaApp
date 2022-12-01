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

const Atrito = () => {
  return (
    <StyledContainer>
      <InnerContainer>
        <Box>
          <Image source={require("../../../assets/Img/LogoIfap.png")} />
        </Box>
        <TextGroup>
          <Title>Atrito</Title>
          <SubTitle>Vm = Δs/Δt</SubTitle>
        </TextGroup>
        <InputGroup>
          <InputBox>
            <InputTitle>V =</InputTitle>
            <InputText />
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

export default Atrito;
