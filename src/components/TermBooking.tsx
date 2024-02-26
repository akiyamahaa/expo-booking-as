import React from "react";
import { Box, VStack, Text, HStack } from "native-base";

type Props = {};

const TermBooking = (props: Props) => {
  return (
    <Box>
      <VStack space={1}>
        <Text fontWeight={500} fontSize={13} color={"orange.600"}>
          LƯU Ý
        </Text>
        <Text>- Nhập đẩy đủ thông tin ở tất cả các mục</Text>
        <Text>- Loại phòng VIP chỉ có ở:</Text>
        <HStack>
          <Text ml={2}>+ Khu vực Trung tâm tại </Text>
          <Text fontWeight={700}>Hà Nội</Text>
        </HStack>
        <HStack>
          <Text ml={2}>+ Khu vực Trung tâm tại </Text>
          <Text fontWeight={700}>Sài Gòn</Text>
        </HStack>
        <Text>
          - Nếu bạn quên hủy phòng khi không sử dụng thì bạn xứng đáng bị phạt.
        </Text>
      </VStack>
    </Box>
  );
};

export default TermBooking;
