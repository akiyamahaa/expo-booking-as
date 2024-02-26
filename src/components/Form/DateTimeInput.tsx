import { Button, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Text,
  Column,
  FormControl,
  WarningOutlineIcon,
  HStack,
  useTheme,
} from "native-base";
import DateTimePickerModal, {
  DateTimePickerProps,
} from "react-native-modal-datetime-picker";
import moment from "moment";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  value: Date;
  onChange: (value: Date) => void;
  title: string;
  mode?: DateTimePickerProps["mode"];
};

const DateTimeInput = ({ value, onChange, title, mode = "date" }: Props) => {
  const { colors } = useTheme();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    onChange(date);
    hideDatePicker();
  };

  return (
    <>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Column flex={1}>
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
          <TouchableOpacity onPress={showDatePicker}>
            <HStack alignItems={"center"} space={2}>
              <Text color="coolGray.500" fontWeight="400" fontSize={13}>
                {!value && "Chọn ngày"}
                {mode == "date"
                  ? moment(value).format("DD - MM - YYYY")
                  : moment(value).format("HH:mm")}
              </Text>
              <Ionicons
                name="calendar-clear-outline"
                color={colors.coolGray[500]}
              />
            </HStack>
          </TouchableOpacity>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Xin hãy lựa chọn!
          </FormControl.ErrorMessage>
        </FormControl>
      </Column>
    </>
  );
};

export default DateTimeInput;

const styles = StyleSheet.create({});
