import { StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, Text, VStack, useTheme } from "native-base";

type Props = {};

const RoomDetail = (props: Props) => {
  return (
    <Box>
      <HStack alignItems={"center"} justifyContent={"space-between"} my={4}>
        <Text fontWeight={700} fontSize={16} color={"coolGray.800"}>
          Phòng 010
        </Text>
        <Box bg={"green.50"}>
          <Text fontWeight={600} fontSize={10} color={"green.700"}>
            Sắp tới
          </Text>
        </Box>
      </HStack>
      <VStack space={2}>
        <HStack justifyContent={"space-between"}>
          <Text fontWeight={400} fontSize={14} color="coolGray.500">
            Cơ sở:{" "}
            <Text fontWeight={500} color={"coolGray.800"}>
              Hà nội
            </Text>
          </Text>
          <Text fontWeight={400} fontSize={14} color="coolGray.500">
            Khu vực:{" "}
            <Text fontWeight={500} color={"coolGray.800"}>
              Trung tâm
            </Text>
          </Text>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text fontWeight={400} fontSize={14} color="coolGray.500">
            Thời gian:
          </Text>
          <Text fontWeight={500} color={"coolGray.800"}>
            Th4 | 8:30 - 10:30 | 10/01/2024
          </Text>
        </HStack>
        <Text fontWeight={400} fontSize={14} color="coolGray.500">
          Mục đích:{" "}
          <Text fontWeight={500} color={"coolGray.800"}>
            Tư vấn
          </Text>
        </Text>
        <Text fontWeight={400} fontSize={14} color="coolGray.500">
          Kế hoạch:{" "}
          <Text fontWeight={500} color={"coolGray.800"}>
            Sử dụng 1 lần
          </Text>
        </Text>
        <Text fontWeight={400} fontSize={14} color="coolGray.500">
          Mô tả:
        </Text>
        <Text fontSize={14} fontWeight={500} color={"coolGray.800"}>
          Lorem ipsum dolor sit amet consectetur. Tincidunt vivamus volutpat nec
          bibendum sollicitudin lacus.
        </Text>
      </VStack>
    </Box>
  );
};

export default RoomDetail;

const styles = StyleSheet.create({});
