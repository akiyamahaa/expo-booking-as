import { StyleSheet } from "react-native";
import React from "react";
import Login from "../screens/auth/Login";
import { AuthStackParams } from "./config";
import { useTheme } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
