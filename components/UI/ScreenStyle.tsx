import {FC} from "react";
import {View} from "react-native";

type ScreenStyleProps = {
  children: string | JSX.Element | JSX.Element[]
}

export const ScreenStyle: FC<ScreenStyleProps> = ({children}) => {
  return (
    <View style={{
      display: 'flex',
      flex: 1,
      backgroundColor: '#5FD4B1',
    }}>
      {children}
    </View>
  );
};