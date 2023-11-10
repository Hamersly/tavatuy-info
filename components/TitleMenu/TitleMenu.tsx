import {FC} from "react";
import {BoxBtn, ContainerBtn, ContainerText, Menu} from "./TitleMenu.styled";
import {useNavigation} from "@react-navigation/native";
import {Btn} from "../UI/Btn";
import {Text} from "@rneui/themed";


export const TitleMenu: FC = () => {
  const {navigate} = useNavigation();

  return (
    <Menu>
      <ContainerText>
        <Text h1
              style={{
                fontWeight: 'bold',
                color: '#00A876'
              }}>
          Таватуй-инфо
        </Text>
      </ContainerText>
      <BoxBtn>
        <ContainerBtn>
          <Btn
            text={'ПОИСК'}
            onPress={() => navigate('Поиск' as never)}
            icon={'search'}
          />
        </ContainerBtn>
        <ContainerBtn>
          <Btn
            text={'НАСТРОЙКИ'}
            onPress={() => navigate('Настроки' as never)}
            icon={'settings'}
          />
        </ContainerBtn>
      </BoxBtn>
    </Menu>
  );
};