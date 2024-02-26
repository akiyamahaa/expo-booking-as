import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Center, Text, Modal, HStack, Divider, useTheme } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { EPopUp } from "../../types/popup";
import { useNavigation } from "@react-navigation/native";

type Props = {
  type: any;
  show: boolean;
  setShow: any;
};

const CommonPopUp = (props: Props) => {
  const { type, show, setShow } = props;
  const navigation = useNavigation<any>();
  const { colors } = useTheme();
  let icon, title, subTitle;

  switch (type) {
    case EPopUp.CANCEL: {
      icon = <Ionicons name="close-circle" size={38} color={colors.red[500]} />;
      title = "Hủy đặt phòng";
      subTitle = "Bạn có chắc chắn muốn hủy thao tác đặt phòng";
      break;
    }
    case EPopUp.SUCCESS: {
      icon = (
        <Ionicons name="checkmark-circle" size={38} color={colors.green[600]} />
      );
      title = "Đặt phòng thành công";
      subTitle = "Bạn đã đặt phòng thành công";
      break;
    }
    case EPopUp.PENDING: {
      icon = <Ionicons name="time" size={38} color={colors.yellow[500]} />;
      title = "Chờ duyệt";
      subTitle = `Yêu cầu của bạn đã được gửi đi. Vui lòng chờ người kiểm duyệt xác nhận`;
      break;
    }
    case EPopUp.LOGIN_FAIL: {
      // icon = <Ionicons name="time" size={38} color={colors.yellow[500]} />;
      title = "Đăng nhập thất bại";
      subTitle = `Bị lỗi email hoặc mật khẩu.`;
      break;
    }
    case EPopUp.CHANGE_PASSWORD_SUCCESS: {
      // icon = <Ionicons name="time" size={38} color={colors.yellow[500]} />;
      title = "Đổi mật khẩu";
      subTitle = `Bạn đã đổi mật khẩu thành công`;
      break;
    }
  }

  const handleCancelNo = () => {
    setShow(false);
  };
  const handleCancelYes = () => {
    navigation.goBack();
  };

  const handleConfirm = () => {
    navigation.navigate("Home");
  };

  return (
    <Modal isOpen={show} onClose={() => setShow(false)} size="sm">
      <Modal.Content bg={"white"}>
        <Modal.Body>
          <Center>
            {icon}
            <Text
              textAlign={"center"}
              fontWeight={700}
              fontSize={16}
              color={"coolGray.800"}
              mt={2}
              mb={1}
            >
              {title}
            </Text>
            <Text
              textAlign={"center"}
              fontWeight={400}
              fontSize={13}
              color={"coolGray.800"}
            >
              {subTitle}
            </Text>
          </Center>
        </Modal.Body>
        <Modal.Footer>
          {type == EPopUp.CANCEL && (
            <HStack flex={1}>
              <TouchableOpacity style={{ flex: 1 }} onPress={handleCancelNo}>
                <Center>
                  <Text fontWeight={700} fontSize={14} color={"text.primary"}>
                    Không
                  </Text>
                </Center>
              </TouchableOpacity>
              <Divider orientation="vertical" bg="red.100" thickness={1} />
              <TouchableOpacity style={{ flex: 1 }} onPress={handleCancelYes}>
                <Center>
                  <Text fontWeight={500} fontSize={14} color={"text.primary"}>
                    Có
                  </Text>
                </Center>
              </TouchableOpacity>
            </HStack>
          )}
          {type == EPopUp.SUCCESS && (
            <HStack flex={1}>
              <TouchableOpacity style={{ flex: 1 }} onPress={handleConfirm}>
                <Center>
                  <Text fontWeight={700} fontSize={14} color={"text.primary"}>
                    Xong
                  </Text>
                </Center>
              </TouchableOpacity>
            </HStack>
          )}
          {type == EPopUp.PENDING && (
            <HStack flex={1}>
              <TouchableOpacity style={{ flex: 1 }} onPress={handleConfirm}>
                <Center>
                  <Text fontWeight={700} fontSize={14} color={"text.primary"}>
                    Xong
                  </Text>
                </Center>
              </TouchableOpacity>
            </HStack>
          )}
          {type == EPopUp.LOGIN_FAIL && (
            <HStack flex={1}>
              <TouchableOpacity style={{ flex: 1 }}>
                <Center>
                  <Text fontWeight={700} fontSize={14} color={"text.primary"}>
                    Xong
                  </Text>
                </Center>
              </TouchableOpacity>
            </HStack>
          )}
          {type == EPopUp.CHANGE_PASSWORD_SUCCESS && (
            <HStack flex={1}>
              <TouchableOpacity style={{ flex: 1 }}>
                <Center>
                  <Text fontWeight={700} fontSize={14} color={"text.primary"}>
                    Xong
                  </Text>
                </Center>
              </TouchableOpacity>
            </HStack>
          )}
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default CommonPopUp;

const styles = StyleSheet.create({});
