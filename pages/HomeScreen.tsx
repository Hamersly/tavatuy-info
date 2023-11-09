import {FC} from "react";
import {TitleMenu} from "../components/TitleMenu/TitleMenu";
import {ScreenStyle} from "../components/UI/ScreenStyle";

export const HomeScreen: FC = () => {
  return (
    <ScreenStyle>
      <TitleMenu/>
    </ScreenStyle>
  );
};