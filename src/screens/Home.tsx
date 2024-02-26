import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Divider,
  HStack,
  ScrollView,
  Text,
  VStack,
  useTheme,
} from "native-base";
import HomeHeader from "../components/HomeHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabsParams, RootStackParams } from "../navigations/config";
import RoomDetail from "../components/Room/RoomDetail";
import Ionicons from "@expo/vector-icons/Ionicons";
import RoomCard from "../components/Room/RoomCard";

type Props = {} & NativeStackScreenProps<
  RootStackParams & BottomTabsParams,
  "Home"
>;

const Home = (props: Props) => {
  const { navigation } = props;
  const { colors } = useTheme();
  return (
    <Box style={styles.container} bg="coolGray.50">
      {/* <CommonPopUp type={ERoomType.}/> */}
      <HomeHeader />
      <ScrollView>
        <Box px={4} py={5}>
          <Text fontWeight={700} fontSize={20} color={"text.primary"}>
            Sắp tới
          </Text>
          <RoomDetail />
          {/* <RoomEmpty /> */}
        </Box>
        <Divider height={2} bg={"coolGray.200"} />
        <Box px={4} py={5}>
          <HStack justifyContent={"space-between"} alignItems={"center"} mb={4}>
            <Text fontWeight={700} fontSize={20} color={"text.primary"}>
              Lịch sử đặt phòng
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("History")}>
              <HStack alignItems={"center"} space={1}>
                <Text fontWeight={500} fontSize={10} color={"coolGray.500"}>
                  Xem thêm
                </Text>
                <Ionicons
                  name="arrow-forward-outline"
                  color={colors.coolGray[500]}
                />
              </HStack>
            </TouchableOpacity>
          </HStack>
          <VStack space={2}>
            <RoomCard />
            <RoomCard />
            <RoomCard />
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
