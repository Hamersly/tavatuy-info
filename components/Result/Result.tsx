import {FC} from "react";
import {ResultView} from "./Result.styled";
import {CardPlot} from "../CardPlot/CardPlot";
import {FlatList} from "react-native";

interface IResultProps {
  result: object[]
  fields: {}
}

export const Result: FC<IResultProps> = ({result, fields}) => {
  const keyExtractor = (item: any, index: any) => index
  const renderItem = ({item}: any) => <CardPlot plot={item} fields={fields}/>
  return (
    <ResultView>
      <FlatList
        data={result}
        removeClippedSubviews={true}
        initialNumToRender={5}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </ResultView>
  );
};