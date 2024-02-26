import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Center, Image, Text } from "native-base";

type Props = {};

const RoomEmpty = (props: Props) => {
  return (
    <Center>
      <Image
        source={require("../../../assets/image/no-info.png")}
        alt="empty-image"
        style={{ marginBottom: 24 }}
      />
      <Text fontWeight={700} fontSize={16} color={"coolGray.500"}>
        Không có đặt phòng đang hoạt động
      </Text>
      <Text fontWeight={400} fontSize={14} color={"coolGray.500"}>
        Sắp xếp lịch và đặt phòng ngay
      </Text>
    </Center>
  );
};

export default RoomEmpty;

const styles = StyleSheet.create({});
