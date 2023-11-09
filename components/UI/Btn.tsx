import {FC} from "react";
import {FAB} from "@rneui/base";

interface IBtnProps {
  text: string
  icon?: string

  onPress(): void
}

export const Btn: FC<IBtnProps> = ({text, icon = '', onPress}) => {
  return (
    <FAB
      icon={{name: icon, color: 'white'}}
      color="#207E62"
      title={text}
      upperCase
      titleStyle={{
        fontWeight: 'bold',
      }}
      onPress={() => onPress()}
      style={{}}
    />
  );
};