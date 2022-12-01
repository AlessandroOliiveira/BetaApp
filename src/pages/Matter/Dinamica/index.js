import React from "react";

import {
  StyledContainer,
  InnerContainer,
  Box,
} from "../../../components/styles/BaseConteinerStyles";

import { ButtonText, Title } from "../../../components/styles/TextStyles";
import { Button, ButtonGroup } from "../../../components/styles/ButtonStyles";
import { Image } from "react-native";

const Calculator = ({ navigation }) => {
  return (
    <StyledContainer>
      <InnerContainer>
        <Box>
          <Image style={{ whidth: 10 }}
            source={require('../../../../assets/Img/LogoIfap.png')} />
        </Box>
        <Title>Escolha Um Assunto</Title>
        <ButtonGroup>
          <Button onPress={() => navigation.navigate("MRU")}>
            <ButtonText>Movimento Retilineo Uniforme</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("MRUV")}>
            <ButtonText>Movimento Retilineo Uniforme Variado</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Torricelli")}>
            <ButtonText>Equação de Torricelli</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("VEM")}>
            <ButtonText>Velocidade Escalar Media</ButtonText>
          </Button>
        </ButtonGroup>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Calculator;
