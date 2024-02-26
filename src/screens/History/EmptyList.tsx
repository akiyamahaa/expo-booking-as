import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Center, Image } from "native-base";

type Props = {};

const EmptyList = (props: Props) => {
  return (
    <Center flex={1}>
      <Image
        source={require("../../../assets/image/empty-list.png")}
        alt="empty-image"
        style={{ marginBottom: 24 }}
      />
    </Center>
  );
};

export default EmptyList;

const styles = StyleSheet.create({});
