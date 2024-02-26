import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  FormControl,
  useTheme,
  HStack,
  Button,
  Pressable,
} from "native-base";
import MyInput from "../../components/Form/MyInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import MyButton from "../../components/Form/MyButton";

type Props = {};

const Login = (props: Props) => {
  const { colors } = useTheme();
  const [email, setEmail] = useState("as@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [show, setShow] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const onForgotPassword = () => {};

  const onLogin = () => {};
  return (
    <Box style={styles.container}>
      <VStack px={8} space={8}>
        <VStack alignItems={"center"}>
          {/* LOGO */}
          <Text fontSize={30} fontWeight={700} color={"text.primary"}>
            LOGO
          </Text>
        </VStack>

        <VStack space={3}>
          <FormControl>
            <MyInput
              onChangeText={setEmail}
              value={email}
              label="Email"
              InputLeftElement={
                <Ionicons
                  name="mail-outline"
                  size={24}
                  color={colors.coolGray[500]}
                  style={{ paddingLeft: 12 }}
                />
              }
            />
          </FormControl>
          <FormControl>
            <MyInput
              onChangeText={setPassword}
              value={password}
              label="Mật khẩu"
              type={show ? "text" : "password"}
              InputLeftElement={
                <Ionicons
                  name="lock-closed-outline"
                  size={24}
                  color={colors.coolGray[500]}
                  style={{ paddingLeft: 12 }}
                />
              }
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
          {/* <HStack justifyContent="space-between" alignItems="center">
            {error && <Text color="error.500">{error}</Text>}
            <HStack flex={error ? 0 : 1} justifyContent="flex-end">
              <Button
                variant="link"
                _text={{ color: "coolGray.500", fontWeight: 400 }}
                onPress={onForgotPassword}
              >
                Quên mật khẩu
              </Button>
            </HStack>
          </HStack> */}
        </VStack>
        <MyButton text={"Đăng nhập"} onPress={onLogin} />
      </VStack>
    </Box>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
