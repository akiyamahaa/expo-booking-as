import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Box,
  Center,
  CheckIcon,
  FormControl,
  Select,
  Text,
  WarningOutlineIcon,
} from "native-base";

type Props = {
  value?: string;
  setValue?: any;
  title: string;
  data: any[];
};

const MySelect = (props: Props) => {
  const { value, setValue, title, data } = props;
  return (
    <Center>
      <FormControl
        isRequired
        borderWidth={1}
        borderRadius={8}
        borderColor={"coolGray.200"}
        p={3}
      >
        <Text fontWeight={400} fontSize={10} color={"coolGray.500"}>
          {title}
        </Text>
        <Select
          minWidth="200"
          accessibilityLabel="Lựa chọn"
          placeholder="Lựa chọn"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={4} />,
          }}
          fontSize={13}
          fontWeight={400}
          borderWidth={0}
          mt="1"
          selectedValue={value}
          onValueChange={(itemValue) => setValue(itemValue)}
        >
          {data.map((elm) => (
            <Select.Item label={elm.name} value={elm.value} key={elm.name} />
          ))}
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Xin hãy lựa chọn!
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>
  );
};

export default MySelect;

const styles = StyleSheet.create({});
