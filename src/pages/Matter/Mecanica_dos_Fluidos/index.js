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
          <Image source={require("../../assets/Img/LogoIfap.png")} />
        </Box>
        <Title>Escolha Um Assunto</Title>
        <ButtonGroup>
          <Button onPress={() => navigation.navigate("Content")}>
            <ButtonText>Carregando...</ButtonText>
          </Button>
        </ButtonGroup>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Calculator;
