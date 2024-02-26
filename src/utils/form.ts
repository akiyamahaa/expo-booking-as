import { EArea, ELocation, EPlan, EPurpose, ERoomType } from "../types/room";

export const RoomSelected = [
  {
    name: "Phòng Thường",
    value: ERoomType.ROOM_NORMAL,
  },
  {
    name: "Phòng Vip",
    value: ERoomType.ROOM_VIP,
  },
];

export const LocationSelected = [
  {
    name: "Hà Nội",
    value: ELocation.HA_NOI,
  },
  {
    name: "Sài Gòn",
    value: ELocation.SAI_GON,
  },
];

export const AreaSelected = [
  {
    name: "Trung tâm",
    value: EArea.TRUNG_TAM,
  },
  {
    name: "Đào tạo",
    value: EArea.DAO_TAO,
  },
];

export const PurposeSelected = [
  {
    name: "Tư vấn",
    value: EPurpose.TU_VAN,
  },
  {
    name: "Dạy học",
    value: EPurpose.DAY_HOC,
  },
];

export const PlanSelected = [
  {
    name:"Một lần",
    value:EPlan.MOT_LAN,
  },
  {
    name:"Hàng ngày",
    value:EPlan.HANG_NGAY,
  },
  {
    name:"Hàng tuần",
    value:EPlan.HANG_TUAN,
  }
]
