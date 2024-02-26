import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, HStack, Text, VStack } from "native-base";
import HomeHeader from "../components/HomeHeader";
import MyButton from "../components/Form/MyButton";
import TermBooking from "../components/TermBooking";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigations/config";

type Props = {} & NativeStackScreenProps<RootStackParams, "TabNav"> & any;

const SearchingRoom = (props: Props) => {
  const { navigation } = props;
  const onBooking = () => {
    navigation.navigate("FilterRoom");
  };
  return (
    <Box flex={1} bg="coolGray.50">
      {/* <CommonPopUp type={ERoomType.}/> */}
      <HomeHeader />
      <VStack flex={1} p={4} justifyContent={"space-between"} pb={12}>
        <TermBooking />
        <MyButton text={"Đặt phòng"} onPress={onBooking} />
      </VStack>
    </Box>
  );
};

export default SearchingRoom;

const styles = StyleSheet.create({});
