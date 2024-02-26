import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Divider,
  HStack,
  ScrollView,
  Text,
  TextArea,
  VStack,
} from "native-base";
import MySelect from "../../components/Form/MySelect";
import {
  AreaSelected,
  LocationSelected,
  PlanSelected,
  PurposeSelected,
  RoomSelected,
} from "../../utils/form";
import MyInputFilter from "../../components/Form/MyInputFilter";
import DateTimeInput from "../../components/Form/DateTimeInput";
import MyButton from "../../components/Form/MyButton";
import MyTextArea from "../../components/Form/MyTextArea";
import { EPlan, ERoomType } from "../../types/room";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";
import ApprovalGroup from "../../components/ApprovalGroup";
import CommonPopUp from "../../components/Modal/CommonPopUp";
import { EPopUp } from "../../types/popup";

type Props = {
  navigation: NativeStackScreenProps<
    RootStackParams,
    "FilterRoom"
  >["navigation"];
  type: "create" | "confirm";
};

const FilterForm = ({ navigation, type }: Props) => {
  const [showCancel, setShowCancel] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [location, setLocation] = useState();
  const [room, setRoom] = useState();
  const [area, setArea] = useState();
  const [slot, setSlot] = useState("");
  const [plan, setPlan] = useState("");
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [startDay, setStartDay] = useState(new Date());
  const [endDay, setEndDay] = useState(new Date());
  const [description, setDescription] = useState("");

  // TODO: add disabled button value

  const handleCancel = () => {
    setShowCancel(true);
  };
  const handleSubmit = () => {
    if (type == "create") {
      navigation.navigate("ListRoomFound");
    } else {
      // TODO: Add Logic Confirm
      setShowConfirm(true);
    }
  };

  return (
    <Box>
      <CommonPopUp
        type={EPopUp.CANCEL}
        show={showCancel}
        setShow={setShowCancel}
      />
      <CommonPopUp
        type={room == ERoomType.ROOM_NORMAL ? EPopUp.SUCCESS : EPopUp.PENDING}
        show={showConfirm}
        setShow={setShowConfirm}
      />

      <Text fontWeight={700} fontSize={20} color={"text.primary"}>
        Bộ lọc
      </Text>
      <Text fontWeight={400} fontSize={13} color={"coolGray.500"}>
        Vui lòng nhập đầy đủ thông tin
      </Text>
      <VStack py={4} space={4}>
        <MySelect
          data={LocationSelected}
          title="Cơ sở"
          value={location}
          setValue={setLocation}
        />
        <MySelect
          data={RoomSelected}
          title="Loại Phòng"
          value={room}
          setValue={setRoom}
        />
        <MySelect
          data={AreaSelected}
          title="Khu vực"
          value={area}
          setValue={setArea}
        />
        <MySelect
          data={PurposeSelected}
          title="Mục đích sử dụng"
          value={area}
          setValue={setArea}
        />
        <MyInputFilter
          title="Số người"
          value={slot}
          onChangeText={setSlot}
          label="Số lượng"
          bg={"transparent"}
        />
        <MySelect
          data={PlanSelected}
          title="Kế hoạch"
          value={plan}
          setValue={setPlan}
        />
        {plan ? (
          plan == EPlan.MOT_LAN ? (
            <>
              <DateTimeInput
                title="Ngày sử dụng"
                value={date}
                onChange={setDate}
              />
              <HStack space={4}>
                <Box flex={1}>
                  <DateTimeInput
                    title="Giờ bắt đầu"
                    mode="time"
                    value={startTime}
                    onChange={setStartTime}
                  />
                </Box>
                <Box flex={1}>
                  <DateTimeInput
                    title="Giờ kết thúc"
                    mode="time"
                    value={endTime}
                    onChange={setEndTime}
                  />
                </Box>
              </HStack>
            </>
          ) : (
            <>
              <HStack space={4}>
                <Box flex={1}>
                  <DateTimeInput
                    title="Ngày băt đầu"
                    mode="time"
                    value={startDay}
                    onChange={setStartDay}
                  />
                </Box>
                <Box flex={1}>
                  <DateTimeInput
                    title="Ngày kết thúc"
                    mode="time"
                    value={endDay}
                    onChange={setEndDay}
                  />
                </Box>
              </HStack>
              <HStack space={4}>
                <Box flex={1}>
                  <DateTimeInput
                    title="Giờ băt đầu"
                    mode="time"
                    value={startTime}
                    onChange={setStartTime}
                  />
                </Box>
                <Box flex={1}>
                  <DateTimeInput
                    title="Giờ kết thúc"
                    mode="time"
                    value={endTime}
                    onChange={setEndTime}
                  />
                </Box>
              </HStack>
            </>
          )
        ) : (
          ""
        )}
        <MyTextArea
          value={description}
          onChangeText={setDescription}
          title="Mô tả"
        />

        {/* Approval */}
        {room == ERoomType.ROOM_VIP && (
          <>
            <Divider height={2} bg={"coolGray.200"} my={2} />
            <ApprovalGroup />
          </>
        )}
        <HStack width={"100%"} space={4}>
          <Box flex={1}>
            <MyButton text="Hủy" onPress={handleCancel} option="cancel" />
          </Box>
          <Box flex={1}>
            <MyButton
              text={type == "create" ? "Lưu" : "Xác nhận"}
              onPress={handleSubmit}
            />
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default FilterForm;

const styles = StyleSheet.create({});
