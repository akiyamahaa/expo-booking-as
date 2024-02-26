import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, HStack, Image, Text, VStack } from "native-base";

type Props = {};

const RoomFound = (props: Props) => {
  const vip = true;

  return (
    <TouchableOpacity onPress={() => {}}>
      <Box
        borderColor="coolGray.200"
        borderWidth={1}
        borderRadius={8}
        px={3}
        py={4}
        bgColor={"white"}
      >
        <VStack>
          <HStack alignItems={"center"} justifyContent={"space-between"}>
            <HStack alignItems={"center"} space={2}>
              <Text fontWeight={700} fontSize={16} color={"coolGray.800"}>
                Phòng 010
              </Text>
              {vip && (
                <Image
                  source={require("../../../assets/icon/vip.png")}
                  alt="vip-icon"
                />
              )}
            </HStack>
            <Box bg={"green.50"}>
              <Text fontWeight={600} fontSize={10} color={"green.700"}>
                Đang trống
              </Text>
            </Box>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text fontWeight={400} fontSize={14} color="coolGray.500">
              Số ghế: 16
            </Text>
            <Text fontWeight={400} fontSize={14} color="coolGray.500">
              Khu vực: Khu A
            </Text>
          </HStack>
        </VStack>
      </Box>
    </TouchableOpacity>
  );
};

export default RoomFound;

const styles = StyleSheet.create({});
