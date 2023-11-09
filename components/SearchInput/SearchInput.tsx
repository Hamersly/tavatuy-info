import {FC, useCallback, useEffect, useMemo, useState} from "react";
import {InputBlock} from "./SearchInput.styled";
import {Input} from '@rneui/themed';
import {Result} from "../Result/Result";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {filterList} from "../../helpers/helpers";


export const SearchInput: FC = () => {
  const [plotList, setPlotList] = useState<object []>([])
  const [fields, setFields] = useState<{}>({})
  const [text, setText] = useState("");
  const [result, setResult] = useState<object []>([])

  const storageData = useCallback(async () => {
    const jsonValue: any = await AsyncStorage.getItem('listPlots')
    if (jsonValue) {
      const data = JSON.parse(jsonValue)
      setFields(data[0])
      data.splice(0, 1)
      setPlotList(data)
    }
  }, [])

  useEffect(() => {
    storageData().catch(console.error)
  }, [storageData]);

  useMemo(() => {
    setResult(() => filterList(text, plotList))
  }, [text]);

  return (
    <InputBlock>
      <Input
        placeholder='Введите ФИО, или номер участка'
        value={text}
        onChangeText={setText}
        style={{fontSize: 22, marginTop: 10}}
      />
      <Result result={result} fields={fields}/>
    </InputBlock>
  );
};