import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParams = {
  Auth: undefined;
  TabNav: undefined;
  History: undefined;
  Profile: undefined;
  ChangePassword: undefined;
  ListRoomFound: undefined;
  FilterRoom: undefined;
};

export type AuthStackParams = {
  Login: undefined;
};

export type BottomTabsParams = {
  Home: undefined;
  SearchingRoom: undefined;
  Notification: undefined;
};
