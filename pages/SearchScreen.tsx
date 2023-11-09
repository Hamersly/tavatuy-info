import {FC} from "react";
import {SearchInput} from "../components/SearchInput/SearchInput";
import {ScreenStyle} from "../components/UI/ScreenStyle";

export const SearchScreen: FC = () => {
  return (
    <ScreenStyle>
      <SearchInput/>
    </ScreenStyle>
  );
};