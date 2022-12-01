import React from "react";

import {
  StyledContainer,
  InnerContainer,
  Box,
} from "../../components/styles/BaseConteinerStyles";

import { ButtonText, Title } from "../../components/styles/TextStyles";
import { Button, ButtonGroup } from "../../components/styles/ButtonStyles";
import { Image } from "react-native";
import logo from "../../assets/Img/LogoIfap.png"


const Calculator = ({ navigation }) => {
  return (
    <StyledContainer>
      <InnerContainer>
        <Box>
          <Image
            style={{ width: '100%', height: 110, resizeMode: 'contain' }}
            source={logo}
          />
        </Box>
        <Title>Escolha Um Assunto</Title>
        <ButtonGroup>
          <Button onPress={() => navigation.navigate("MatterC")}>
            <ButtonText>Cinematica Escalar</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("")}>
            <ButtonText>Dinâmica</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Content")}>
            <ButtonText>Mecanica dos Fluidos</ButtonText>
          </Button>
        </ButtonGroup>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Calculator;
