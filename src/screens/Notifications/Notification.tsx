import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "native-base";
// import * as Notifications from "expo-notifications";
import NotiCard from "./NotiCard";

type Props = {};

// Notifications.setNotificationHandler({
//   handleNotification: async () => {
//     return {
//       shouldPlaySound: false,
//       shouldSetBadge: false,
//       shouldShowAlert: true,
//     };
//   },
// }); // tell app how incoming  noti related to app

const Notification = (props: Props) => {
  return (
    <Box bg={"coolGray.50"} flex={1}>
      <NotiCard />
      <NotiCard />

    </Box>
  );
};

export default Notification;

const styles = StyleSheet.create({});
