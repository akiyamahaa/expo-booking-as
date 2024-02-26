import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Box, HStack, Text, Avatar, useTheme } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const HomeHeader = (props: Props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  return (
    <Box
      bg={"background.primary"}
      px={4}
      style={{
        paddingTop: insets.top,
      }}
      pb={2}
    >
      <HStack alignItems={"center"} space={2}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Avatar
            source={{
              uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          />
        </TouchableOpacity>
        <Box>
          <Text fontSize={16} fontWeight={600} color={"white"}>
            Nguyen Van A
          </Text>
          <Text fontSize={10} fontWeight={500} color={"white"}>
            Nhân viên tư vấn
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
