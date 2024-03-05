import {FC, useEffect, useState} from "react";
import {BoxBtn, ContainerBtn, ContainerText, Menu} from "./TitleMenu.styled";
import {useNavigation} from "@react-navigation/native";
import {Btn} from "../UI/Btn";
import {Text} from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const TitleMenu: FC = () => {
  const {navigate} = useNavigation();
  const [date, setDate] = useState(0);
  const getStorageDate = async () => {
    const jsonValue: any = await AsyncStorage.getItem('listDate')
    if (jsonValue) {
      const data = JSON.parse(jsonValue)
      const dateField = data[0]
      setDate(dateField["Date"])
    }
  }

  useEffect(() => {
    getStorageDate().catch(console.error)
  }, []);

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
        <ContainerText>
          <Text h4
                style={{
                  fontWeight: 'bold',
                  color: '#00A876'
                }}>
            Данные от: {date}
          </Text>
        </ContainerText>
      </BoxBtn>
    </Menu>
  );
};