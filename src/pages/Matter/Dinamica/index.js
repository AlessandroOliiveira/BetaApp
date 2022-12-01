import React from "react";

import {
  StyledContainer,
  InnerContainer,
  Box,
} from "../../../components/styles/BaseConteinerStyles";

import { ButtonText, Title } from "../../../components/styles/TextStyles";
import { Button, ButtonGroup } from "../../../components/styles/ButtonStyles";
import { Image } from "react-native";
import logo from "../../../assets/Img/LogoIfap.png"


const Dinamica = ({ navigation }) => {
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
          <Button onPress={() => navigation.navigate("ForcaR")}>
            <ButtonText>Força Resultante ( 2º Lei de Newton )</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("LeiGravUni")}>
            <ButtonText>Lei da gravitação universal</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Trabalho")}>
            <ButtonText>Trabalho</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("ProtenciaM")}>
            <ButtonText>Potência mecânica </ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Content")}>
            <ButtonText>Em Breve </ButtonText>
          </Button>
        </ButtonGroup>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Dinamica;
