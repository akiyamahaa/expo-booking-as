import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Box, FlatList, HStack, Text, VStack, useTheme } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import RoomCard from "../../components/Room/RoomCard";
import EmptyList from "./EmptyList";
import FilterPopUp from "../../components/Modal/FilterPopUp";

type Props = {};
const item = [
  {
    name: "001",
    vip: false,
    status: "pending",
    area: "Trung tâm",
    type: "Lịch hàng tuần",
    slot: 16,
  },
  {
    name: "001",
    vip: true,
    status: "pending",
    area: "Trung tâm",
    type: "Lịch hàng tuần",
    slot: 16,
  },
  {
    name: "001",
    vip: false,
    status: "pending",
    area: "Trung tâm",
    type: "Lịch hàng tuần",
    slot: 16,
  },
];

const History = (props: Props) => {
  const { colors } = useTheme();
  const [showModal, setShowModal] = useState(false);

  return (
    <Box p={4} flex={1} bg="coolGray.50">
      <FilterPopUp show={showModal} setShow={setShowModal} />
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <Text fontWeight={700} fontSize={16} color={"text.primary"}>
          Danh sách đặt phòng
        </Text>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Ionicons
            name="options-outline"
            size={20}
            color={colors.coolGray[500]}
          />
        </TouchableOpacity>
      </HStack>
      <FlatList
        data={item}
        renderItem={({ item }) => (
          <Box my={1}>
            <RoomCard />
          </Box>
        )}
      />
    </Box>
  );
};

export default History;

const styles = StyleSheet.create({});
