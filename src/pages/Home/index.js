import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import {
  StyledContainer,
  InnerContainer,
} from "../../components/styles/BaseConteinerStyles";

import { Button, ButtonGroup } from "../../components/styles/ButtonStyles";
import { Title, ButtonText } from "../../components/styles/TextStyles";
import logo from "../../assets/Img/LogoIfap.png"

const Home = ({ navigation }) => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <Image
        style={{ width: '100%', height: 110, resizeMode: 'contain' }} 
          source={logo}
        />
        <Title> Menu Principal</Title>
        <ButtonGroup>
          <Button onPress={() => navigation.navigate("Calculator")}>
            <ButtonText>Calculadora</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Content")}>
            <ButtonText>Conteudo</ButtonText>
          </Button>
        </ButtonGroup>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Home;
