import {FC} from "react";
import {EncodingType, StorageAccessFramework} from "expo-file-system";
import {Alert} from "react-native";
import {Btn} from "../UI/Btn";
import {UpdateBlock} from "./UpdateSetting.styled";
import {Text} from '@rneui/themed';
import XLSX from "xlsx";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UpdateSetting: FC = () => {

  const getList = async () => {
    try {
      const permissions =
        await StorageAccessFramework.requestDirectoryPermissionsAsync()

      if (permissions.granted) {
        const uri = permissions.directoryUri;
        const fileUri = await StorageAccessFramework.readDirectoryAsync(uri).then((res) => {
          for (let i = 0; i < res.length; i++) {
            if (res[i].endsWith('list.xls')) {
              return res[i];
            }
          }
        })
        if (fileUri) {
          let text = await StorageAccessFramework.readAsStringAsync(fileUri, {encoding: EncodingType.Base64});
          const workbook = XLSX.read(text, {type: "base64"});
          const sheet_name_list = workbook.SheetNames;
          const listPlots = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
          await AsyncStorage.clear()
          await AsyncStorage.setItem("listPlots", JSON.stringify(listPlots));

        }

      } else {
        Alert.alert('Внимание!', "Нет доступа к файлу!!!");
      }
    } catch (e) {
      Alert.alert('Ошибка!!!', `${e}`)
    }
  }

  return (
    <UpdateBlock>
      <Text h3={true}>Обновление данных:</Text>
      <Text
        h4={true}
        style={{textAlign: 'center'}}
      >
        Будет необходимо указать директорию с файлом list.xls, после чего разрешить приложению использовать данную
        директорию.
        Далее приложение самостоятельно обновит информацию на основе этого файла.
      </Text>
      <Btn text={'ОБНОВИТЬ'} onPress={() => getList()} icon={'refresh'}/>
    </UpdateBlock>
  );
};