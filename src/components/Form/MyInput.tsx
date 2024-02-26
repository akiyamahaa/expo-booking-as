import { Platform, StyleSheet } from "react-native";
import React from "react";
import {
  Box,
  Column,
  FormControl,
  IInputProps,
  IStackProps,
  Input,
} from "native-base";

type Props = {
  label?: string;
  _stack?: IStackProps;
} & IInputProps;

const isIOS = Platform.OS === "ios";

const MyInput = ({ label, _stack, ...inputProps }: Props) => {
  return (
    <Column {..._stack}>
      {!!label && (
        <FormControl.Label _text={{ color: "text.700", fontWeight: "medium" }}>
          {label}
        </FormControl.Label>
      )}
      <Box bg="transparent">
        <Input
          size="md"
          bg={"#fff"}
          borderColor="coolGray.300"
          placeholder={label}
          px={2}
          variant="filled"
          py={isIOS ? "3" : "2"}
          color="coolGray.500"
          {...inputProps}
        />
      </Box>
    </Column>
  );
};

export default MyInput;

const styles = StyleSheet.create({});
