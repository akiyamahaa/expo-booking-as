import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import {
  Text,
  Box,
  Center,
  VStack,
  FormControl,
  useTheme,
  Pressable,
} from "native-base";
import MyInput from "../components/Form/MyInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import MyButton from "../components/Form/MyButton";

type Props = {};

const ChangePassword = (props: Props) => {
  const { colors } = useTheme();
  const [oldPassword, setOldPassword] = useState("12345678");
  const [newPassword, setNewPassword] = useState("12345678");
  const [reNewPassword, setReNewPassword] = useState("12345678");

  const [show, setShow] = useState(false);

  const onChangePassword = () => {};

  return (
    <Box bg={"coolGray.50"} flex={1} p={4}>
      <Center my={10}>
        <Text fontWeight={700} fontSize={20} color="text.primary">
          Đổi mật khẩu
        </Text>
        <Text fontWeight={400} fontSize={13} color={"coolGray.500"}>
          Vui lòng nhập đầy đủ thông tin
        </Text>
      </Center>
      <VStack space={3} mb={12}>
        <FormControl>
          <MyInput
            onChangeText={setOldPassword}
            value={oldPassword}
            label="Mật khẩu cũ"
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Ionicons
                  name={show ? "eye-off-outline" : "eye-outline"}
                  size={24}
                  color={colors.coolGray[500]}
                  style={{ paddingRight: 12 }}
                />
              </Pressable>
            }
          />
        </FormControl>
      </VStack>
      <VStack space={4} mb={12}>
        <FormControl>
          <MyInput
            onChangeText={setNewPassword}
            value={newPassword}
            label="Mật khẩu mới"
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Ionicons
                  name={show ? "eye-off-outline" : "eye-outline"}
                  size={24}
                  color={colors.coolGray[500]}
                  style={{ paddingRight: 12 }}
                />
              </Pressable>
            }
          />
        </FormControl>
        <FormControl>
          <MyInput
            onChangeText={setReNewPassword}
            value={reNewPassword}
            label="Nhắc lại mật khẩu"
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Ionicons
                  name={show ? "eye-off-outline" : "eye-outline"}
                  size={24}
                  color={colors.coolGray[500]}
                  style={{ paddingRight: 12 }}
                />
              </Pressable>
            }
          />
        </FormControl>
      </VStack>
      <MyButton text={"Đổi mật khẩu"} onPress={onChangePassword} />
    </Box>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
