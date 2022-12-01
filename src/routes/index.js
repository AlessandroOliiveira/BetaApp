import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";

// Materias
import Calculator from "../pages/Calculator";

// Assuntos
import MatterC from "../pages/Matter/Cinematica_Escalar";

// Cinetica Escalar
import MRU from "../pages/Matter/Cinematica_Escalar/MovimentoUniforme.js";
import MRUV from "../pages/Matter/Cinematica_Escalar/MovimentoUniformeVariado.js";

// Dinamica

// Mecanica Dos Fluidos

// Em Breve
import Content from "../pages/Content";

const AppStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Calculator" component={Calculator} />

      {/* Cinetica Escalar */}
      <AppStack.Screen name="MatterC" component={MatterC} />
      <AppStack.Screen name="MRU" component={MRU} />
      <AppStack.Screen name="MRUV" component={MRUV} />
    

      {/* Dinamica */}

      {/* Mecanica dos Fluidos */}

      <AppStack.Screen name="Content" component={Content} />
    </AppStack.Navigator>
  );
};

export default Routes;
