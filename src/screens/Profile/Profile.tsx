import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Box, VStack, useTheme } from "native-base";
import AvatarGroup from "./AvatarGroup";
import SettingGroup from "./SettingGroup";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";

type Props = {} & NativeStackScreenProps<RootStackParams, "Profile">;

const Profile = (props: Props) => {
  const {navigation} = props
  return (
    <Box bg={"coolGray.50"} flex={1} p={4}>
      {/* Avt User */}
      <AvatarGroup />
      <SettingGroup navigation={navigation} />
    </Box>
  );
};

export default Profile;

const styles = StyleSheet.create({});
