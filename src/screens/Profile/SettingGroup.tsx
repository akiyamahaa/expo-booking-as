import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text, Box, HStack, useTheme, Switch, VStack } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";

type Props = {
  navigation: NativeStackScreenProps<RootStackParams, "Profile">["navigation"];
};

const SettingGroup = (props: Props) => {
  const { navigation } = props;
  const { colors } = useTheme();

  const handleLogout = () => {};
  const handleChangePasswword = () => {
    navigation.navigate("ChangePassword");
  };
  return (
    <VStack space={2}>
      <HStack
        justifyContent={"space-between"}
        alignItems={"center"}
        py={4}
        borderBottomWidth={1}
        borderColor={"coolGray.200"}
      >
        <HStack alignItems={"center"} space={3}>
          <Ionicons
            name="notifications-outline"
            color={colors.coolGray[800]}
            size={24}
          />
          <Text fontWeight={400} fontSize={16} color={"coolGray.800"}>
            Nhắc nhở thông báo
          </Text>
        </HStack>
        <Switch size="sm" />
      </HStack>
      <TouchableOpacity onPress={handleChangePasswword}>
        <HStack
          justifyContent={"space-between"}
          alignItems={"center"}
          py={4}
          borderBottomWidth={1}
          borderColor={"coolGray.200"}
        >
          <HStack alignItems={"center"} space={3}>
            <Ionicons
              name="lock-closed-outline"
              color={colors.coolGray[800]}
              size={24}
            />
            <Text fontWeight={400} fontSize={16} color={"coolGray.800"}>
              Đổi mật khẩu
            </Text>
          </HStack>
          <Ionicons
            name="chevron-forward"
            color={colors.coolGray[300]}
            size={20}
          />
        </HStack>
      </TouchableOpacity>
      <HStack
        justifyContent={"space-between"}
        alignItems={"center"}
        py={4}
        borderBottomWidth={1}
        borderColor={"coolGray.200"}
      >
        <HStack alignItems={"center"} space={3}>
          <Ionicons
            name="phone-portrait-outline"
            color={colors.coolGray[800]}
            size={24}
          />
          <Text fontWeight={400} fontSize={16} color={"coolGray.800"}>
            Phiên bản
          </Text>
        </HStack>
        <Text fontWeight={400} fontSize={14} color={"coolGray.800"}>
          1.1.1
        </Text>
      </HStack>
      <TouchableOpacity onPress={handleLogout}>
        <HStack py={4}>
          <HStack alignItems={"center"} space={3}>
            <Ionicons
              name="log-out-outline"
              color={colors.red[600]}
              size={24}
            />
            <Text fontWeight={400} fontSize={16} color={"red.600"}>
              Đăng xuất
            </Text>
          </HStack>
        </HStack>
      </TouchableOpacity>
    </VStack>
  );
};

export default SettingGroup;

const styles = StyleSheet.create({});
