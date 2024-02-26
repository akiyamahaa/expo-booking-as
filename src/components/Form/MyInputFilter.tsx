import { Platform, StyleSheet } from "react-native";
import React from "react";
import {
  Center,
  Text,
  FormControl,
  WarningOutlineIcon,
  Box,
  Input,
  useTheme,
  IInputProps,
} from "native-base";

type Props = {
  title: string;
  label?: string;
} & IInputProps;
const isIOS = Platform.OS === "ios";

const MyInputFilter = (props: Props) => {
  const { title, label, ...inputProps } = props;
  const { colors } = useTheme();
  return (
    <Center>
      <FormControl
        isRequired
        borderWidth={1}
        borderRadius={8}
        borderColor={"coolGray.200"}
        p={3}
      >
        <FormControl.Label
          _text={{ color: "coolGray.500", fontWeight: "400", fontSize: 10 }}
        >
          {title}
        </FormControl.Label>
        <Box bg="transparent">
          <Input
            size="md"
            bg={"#fff"}
            borderWidth={0}
            placeholder={label}
            placeholderTextColor={colors.coolGray[500]}
            px={3}
            variant="filled"
            py={isIOS ? "3" : "2"}
            color="black"
            {...inputProps}
          />
        </Box>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Xin hãy lựa chọn!
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>
  );
};

export default MyInputFilter;

const styles = StyleSheet.create({});
