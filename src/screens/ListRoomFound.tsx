import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Box, FlatList, HStack, Text, VStack, useTheme } from "native-base";
import FilterPopUp from "../components/Modal/FilterPopUp";
import Ionicons from "@expo/vector-icons/Ionicons";
import RoomFound from "../components/Room/RoomFound";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigations/config";

type Props = {} & NativeStackScreenProps<RootStackParams, "ListRoomFound">;

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

const ListRoomFound = (props: Props) => {
  const { navigation } = props;
  const { colors } = useTheme();
  const [showModal, setShowModal] = useState(false);

  return (
    <Box p={4} flex={1} bg="coolGray.50">
      <FilterPopUp show={showModal} setShow={setShowModal} />
      <HStack justifyContent={"space-between"} alignItems={"center"} mb={4}>
        <Text fontWeight={700} fontSize={16} color={"text.primary"}>
          Danh sách phòng phù hợp
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
            <RoomFound />
          </Box>
        )}
      />
    </Box>
  );
};

export default ListRoomFound;

const styles = StyleSheet.create({});
