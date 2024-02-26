import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text, Box, IButtonProps, IBoxProps } from "native-base";

type Props = {
  text: string;
  onPress: () => void;
  option?: string;
};

const MyButton = (props: Props) => {
  const { text, onPress, option = "accept" } = props;
  let textColor, btnColor;
  if (option == "accept") {
    textColor = "coolGray.50";
    btnColor = "background.primary";
  } else if (option == "cancel") {
    textColor = "orange.600";
    btnColor = "orange.100";
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Box background={btnColor} p={3} borderRadius={4}>
        <Text
          textAlign={"center"}
          fontWeight={500}
          color={textColor}
          fontSize={16}
        >
          {text}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({});
