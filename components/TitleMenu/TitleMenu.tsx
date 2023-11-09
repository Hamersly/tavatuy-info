import {FC} from "react";
import {Menu} from "./TitleMenu.styled";
import {useNavigation} from "@react-navigation/native";
import {Btn} from "../UI/Btn";
import {View} from "react-native";
import {Text} from "@rneui/themed";


export const TitleMenu: FC = () => {
  const {navigate} = useNavigation();

  return (
    <Menu>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text h1 style={{
          fontWeight: 'bold',
          color: '#00A876'
        }}>
          Таватуй-инфо
        </Text>
      </View>
      <View style={{
        flex: 1,
      }}>
        <View style={{marginVertical: 15}}>
          <Btn
            text={'ПОИСК'}
            onPress={() => navigate('Поиск' as never)}
            icon={'search'}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Btn
            text={'НАСТРОЙКИ'}
            onPress={() => navigate('Настроки' as never)}
            icon={'settings'}
          />
        </View>
      </View>
    </Menu>
  );
};