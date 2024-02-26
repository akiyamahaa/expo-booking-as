import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Box, HStack, Image, Text, VStack } from "native-base";
import InfoRoomPopUp from "../Modal/InfoRoomPopUp";

type Props = {};

const RoomCard = (props: Props) => {
  const vip = true;
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <InfoRoomPopUp show={showModal} setShow={setShowModal}  />
      <TouchableOpacity onPress={() => setShowModal(true)}>
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
                  Sắp tới
                </Text>
              </Box>
            </HStack>
            <HStack justifyContent={"space-between"}>
              <Text fontWeight={400} fontSize={14} color="coolGray.500">
                Cơ sở: Hà nội
              </Text>
              <Text fontWeight={400} fontSize={14} color="coolGray.500">
                Sử dụng 1 lần
              </Text>
            </HStack>
            <HStack justifyContent={"space-between"}>
              <Text fontWeight={400} fontSize={14} color="coolGray.500">
                Số ghế: 16
              </Text>
              <Text fontWeight={400} fontSize={14} color="coolGray.500">
                Th4 | 8:30 - 10:30 | 10/01/2024
              </Text>
            </HStack>
          </VStack>
        </Box>
      </TouchableOpacity>
    </>
  );
};

export default RoomCard;

const styles = StyleSheet.create({});
