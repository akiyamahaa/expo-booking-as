import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Box,
  Center,
  FormControl,
  ITextAreaProps,
  TextArea,
  WarningOutlineIcon,
} from "native-base";

type Props = { title: string } & ITextAreaProps;

const MyTextArea = (props: Props) => {
  const { title, ...textAreaProps } = props;
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
          <TextArea
            autoCompleteType={false}
            h={20}
            placeholder="VD: Tư vấn học sinh Nguyễn Văn A"
            w="100%"
            borderWidth={0}
            {...textAreaProps}
          />
        </Box>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Xin hãy lựa chọn!
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>
  );
};

export default MyTextArea;

const styles = StyleSheet.create({});
