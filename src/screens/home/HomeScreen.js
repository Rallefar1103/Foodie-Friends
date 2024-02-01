import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";

import SignUpScreen from "../login/SignUpScreen";

// Screen Names
const matches = "Matches";
const settings = "Settings";
const swipe = "Swipe";

const Tab = createBottomTabNavigator();

export default function HomeScreen({ route, navigation }) {
  return (
    <React.Fragment>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            if (routeName === matches) {
              iconName = focused ? "home" : "home-outline";
            } else if (routeName === settings) {
              iconName = focused ? "settings" : "settings-outline";
            } else if (routeName === swipe) {
              iconName = focused ? "play" : "play-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Swipe">{() => <LoginScreen />}</Tab.Screen>
        //
        <Tab.Screen name={matches} component={SignUpScreen} />
        {/* <Tab.Screen name={settings} component={SettingsScreen} /> */}
      </Tab.Navigator>
    </React.Fragment>
  );
}
