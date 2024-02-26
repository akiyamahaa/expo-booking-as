import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, Box, HStack, Avatar } from "native-base";

type Props = {};

const ApprovalGroup = (props: Props) => {
  return (
    <Box borderWidth={1} borderColor={"coolGray.200"} borderRadius={8} p={4}>
      <Text fontWeight={400} fontSize={10} color={"coolGray.500"} mb={1}>
        Người xác nhận
      </Text>
      <HStack space={2}>
        <Avatar
          size={6}
          source={{
            uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
        <Avatar
          size={6}
          source={{
            uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
      </HStack>
    </Box>
  );
};

export default ApprovalGroup;

const styles = StyleSheet.create({});
