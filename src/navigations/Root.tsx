import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorOverlay from "../components/ErrorOverlay";
import LoadingOverlay from "../components/LoadingOverlay";
import { RootStackParams } from "./config";
import AuthStack from "./AuthStack";
import TabNav from "./TabNav";
import { useTheme } from "native-base";
import { StatusBar } from "expo-status-bar";
import History from "../screens/History/History";
import Profile from "../screens/Profile/Profile";
import ChangePassword from "../screens/ChangePassword";
import FilterRoom from "../screens/FilterRoom/FilterRoom";
import ListRoomFound from "../screens/ListRoomFound";

const Stack = createNativeStackNavigator<RootStackParams>();

const Root = () => {
  const user = true;
  const { colors } = useTheme();
  return (
    <>
      <StatusBar style="light" />
      <LoadingOverlay />
      <ErrorOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {!user && <Stack.Screen name="Auth" component={AuthStack} />}
          {user && <Stack.Screen name="TabNav" component={TabNav} />}
          <Stack.Screen
            options={{
              headerShown: true,
              title: "Lịch sử đặt phòng",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.background.primary,
              },
              headerTitleStyle: {
                color: "white",
              },
              headerTintColor: "white",
            }}
            name="History"
            component={History}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              title: "Thông tin cá nhân",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.background.primary,
              },
              headerTitleStyle: {
                color: "white",
              },
              headerTintColor: "white",
            }}
            name="Profile"
            component={Profile}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              title: "Đổi mật khẩu",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.background.primary,
              },
              headerTitleStyle: {
                color: "white",
              },
              headerTintColor: "white",
            }}
            name="ChangePassword"
            component={ChangePassword}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              title: "Tìm kiếm phòng",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.background.primary,
              },
              headerTitleStyle: {
                color: "white",
              },
              headerTintColor: "white",
              headerLeft: () => <></>,
            }}
            name="FilterRoom"
            component={FilterRoom}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              title: "Tìm kiếm phòng",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.background.primary,
              },
              headerTitleStyle: {
                color: "white",
              },
              headerTintColor: "white",
            }}
            name="ListRoomFound"
            component={ListRoomFound}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
