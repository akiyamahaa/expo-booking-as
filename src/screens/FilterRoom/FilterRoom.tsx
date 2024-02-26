import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, Divider, ScrollView, useTheme } from "native-base";
import TermBooking from "../../components/TermBooking";
import FilterForm from "./FilterForm";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {} & NativeStackScreenProps<RootStackParams, "FilterRoom">;

const FilterRoom = (props: Props) => {
  const { navigation } = props;
  const { colors } = useTheme();

  const type = "create";
  //TODO: receive type value when navigate to component

  return (
    <Box flex={1} bg={"coolGray.50"}>
      <ScrollView>
        <Box p={4}>
          <TermBooking />
        </Box>
        <Divider height={2} bg={"coolGray.200"} my={2} />
        <Box p={4}>
          <FilterForm navigation={navigation} type={type} />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default FilterRoom;

const styles = StyleSheet.create({});
