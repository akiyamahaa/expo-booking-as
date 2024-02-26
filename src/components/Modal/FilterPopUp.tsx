import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Box, HStack, Modal, Text, VStack } from "native-base";
import MySelect from "../Form/MySelect";
import MyInputFilter from "../Form/MyInputFilter";
import DateTimeInput from "../Form/DateTimeInput";
import MyButton from "../Form/MyButton";
import { LocationSelected, RoomSelected } from "../../utils/form";

type Props = {
  show: boolean;
  setShow: any;
};

const FilterPopUp = (props: Props) => {
  const { show, setShow } = props;
  const [room, setRoom] = useState("");
  const [area, setArea] = useState("");
  const [purpose, setPurpose] = useState("");
  const [date, setDate] = useState(new Date());

  const handleCancel = () => {
    
  };
  const handleSubmit = () => {};

  return (
    <Modal isOpen={show} size="xl">
      <Modal.Content bg={"white"}>
        <Modal.CloseButton onPress={() => setShow(false)} />
        <Modal.Header bg="white">Bộ lọc</Modal.Header>
        <Modal.Body>
          <VStack space={4} mb={4}>
            <MySelect
              data={RoomSelected}
              title="Loại Phòng"
              value={room}
              setValue={setRoom}
            />
            <MySelect
              data={LocationSelected}
              title="Khu vực"
              value={area}
              setValue={setArea}
            />
            <MySelect
              data={LocationSelected}
              title="Mục đích sử dụng"
              value={area}
              setValue={setArea}
            />
            <MySelect
              data={LocationSelected}
              title="Kế hoạch"
              value={purpose}
              setValue={setPurpose}
            />
            <HStack space={4}>
              <DateTimeInput
                value={date}
                onChange={setDate}
                title="Ngày bắt đầu từ"
              />
              <DateTimeInput
                value={date}
                onChange={setDate}
                title="Ngày ngày kết thúc đến"
                mode="time"
              />
            </HStack>
          </VStack>
          <HStack width={"100%"} space={4}>
            <Box flex={1}>
              <MyButton text="Xóa" onPress={handleCancel} option="cancel" />
            </Box>
            <Box flex={1}>
              <MyButton text="Lưu" onPress={handleSubmit} />
            </Box>
          </HStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default FilterPopUp;

const styles = StyleSheet.create({});
