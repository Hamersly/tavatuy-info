import {FC} from "react";
import {ScreenStyle} from "../components/UI/ScreenStyle";
import {UpdateSetting} from "../components/UpdateSetting/UpdateSetting";

export const SettingsScreen: FC = () => {
  return (
    <ScreenStyle>
      <UpdateSetting/>
    </ScreenStyle>
  );
};