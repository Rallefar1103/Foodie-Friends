import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackView } from "@react-navigation/stack";
import LoginScreen from "./src/screens/login/LoginScreen";
import { useState, useEffect } from "react";
import HomeScreen from "./src/screens/home/HomeScreen";
import provideFirebaseApp from "./src/firebase/firebase";
import SignUpScreen from "./src/screens/login/SignUpScreen";
import { LogBox } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <LoginScreen />
    </NavigationContainer>
  );
}
