import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar, Box, Center, Text, VStack, useTheme } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {};

const AvatarGroup = (props: Props) => {
  const { colors } = useTheme();

  return (
    <Center my={6}>
      <Box position={"relative"} alignItems={"center"}>
        <Avatar
          source={{
            uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
          size={"2xl"}
        />
        <TouchableOpacity
          style={styles.cameraBtn}
          // onPress={pickImage}
          // disabled={!edit}
        >
          <Ionicons
            name="camera-reverse"
            color={colors.coolGray[400]}
            size={24}
          />
        </TouchableOpacity>
      </Box>
      <VStack alignItems={"center"} space={2} mt={4}>
        <Text fontWeight={700} fontSize={16} color={"coolGray.800"}>
          Nguyễn Văn A
        </Text>
        <Text fontWeight={400} fontSize={13} color={"coolGray.500"}>
          HN - Nhân viên thiết kế
        </Text>
      </VStack>
    </Center>
  );
};

export default AvatarGroup;

const styles = StyleSheet.create({
  cameraBtn: {
    marginTop: -20,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    padding: 6,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
