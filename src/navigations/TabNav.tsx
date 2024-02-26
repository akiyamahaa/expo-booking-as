import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Box, Text, VStack, useTheme } from "native-base";
import { BottomTabsParams } from "./config";
import Notification from "../screens/Notifications/Notification";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchingRoom from "../screens/SearchingRoom";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator<BottomTabsParams>();

const CustomTabBarButton = ({ children, onPress, focused }: any) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        top: -24,
      }}
      onPress={onPress}
    >
      <VStack space={1} alignItems={"center"}>
        <Box
          bg={"background.primary"}
          style={{
            borderRadius: 100,
            width: 60,
            height: 60,
            borderWidth: 0.5,
            borderColor: colors.coolGray[800],
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Ionicons name="add-outline" size={40} color={colors.white} />
        </Box>
      </VStack>
    </TouchableOpacity>
  );
};

const TabNav = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {},
        // tabBarActiveTintColor: colors.background.primary,
        // tabBarInactiveTintColor: colors.coolGray[800],
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <VStack alignItems={"center"}>
              <Ionicons
                name="calendar-clear"
                size={20}
                color={
                  focused ? colors.background.primary : colors.coolGray[800]
                }
              />
              <Text
                fontSize={10}
                fontWeight={400}
                color={focused ? "text.primary" : colors.coolGray[800]}
              >
                Đặt phòng của tôi
              </Text>
            </VStack>
          ),
        }}
      />
      <Tab.Screen
        name="SearchingRoom"
        component={SearchingRoom}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => (
            <VStack alignItems={"center"}>
              <Ionicons
                name="notifications-outline"
                size={20}
                color={
                  focused ? colors.background.primary : colors.coolGray[800]
                }
              />
              <Text
                fontSize={10}
                fontWeight={400}
                color={focused ? "text.primary" : colors.coolGray[800]}
              >
                Đặt phòng của tôi
              </Text>
            </VStack>
          ),
          headerShown: true,
          title: "Thông báo",
          headerStyle: {
            backgroundColor: colors.background.primary,
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});
