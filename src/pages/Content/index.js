import React from "react";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  StyledContainer,
  InnerContainer,
} from "../../components/styles/BaseConteinerStyles";

import { Title } from "../../components/styles/TextStyles";
import logo from "../../assets/Img/LogoIfap.png"


const Home = ({ navigation }) => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <Box>
          <Image
            style={{ width: '100%', height: 110, resizeMode: 'contain' }}
            source={logo}
          />
        </Box>
        <Title> Em breve</Title>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Home;
