import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, Modal } from "native-base";
import RoomDetail from "../Room/RoomDetail";
import MyButton from "../Form/MyButton";

type Props = {
  show: boolean;
  setShow: any;
  //TODO: Add room data
};

const InfoRoomPopUp = (props: Props) => {
  const { show, setShow } = props;

  const handleChangeRoom = () => {};
  return (
    <Modal isOpen={show} onClose={() => setShow(false)} size="xl">
      <Modal.Content bg={"white"}>
        <Modal.CloseButton onPress={() => setShow(false)} />
        <Modal.Header bg="white">Thông tin</Modal.Header>
        <Modal.Body>
          <RoomDetail />
          <Box mt={6}>
            <MyButton text="Đổi phòng" onPress={handleChangeRoom} />
          </Box>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default InfoRoomPopUp;

const styles = StyleSheet.create({});
