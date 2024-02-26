import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Text, Box, HStack, Avatar, VStack } from "native-base";

type Props = {
  isSeen?: boolean;
};

const NotiCard = (props: Props) => {
  const { isSeen = false } = props;

  const onHandleNoti = () => {};
  return (
    <TouchableOpacity onPress={onHandleNoti}>
      <Box py={2} px={4} bg={isSeen ? "white" : "primary.50"}>
        <HStack space={3}>
          <Avatar
            size={10}
            source={{
              uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          />
          <VStack space={2} flex={1}>
            <Text fontWeight={600} fontSize={13} color={"coolGray.800"}>
              Nguyễn Thị LT đã xác nhận lịch đặt phòng 001 của bạn lúc 08:30
              10/01/2024
            </Text>
            <Text fontWeight={400} fontSize={10} color={"coolGray.500"}>
              07:45 - 10/01/2024
            </Text>
          </VStack>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

export default NotiCard;

const styles = StyleSheet.create({});
