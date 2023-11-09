import {FC} from "react";
import {BlockView, CardText, CardVue, LineView} from "./CardPlot.styled";

interface ICardPlotProps {
  plot: { [index: string]: string }
  fields: { [index: string]: string }
}

export const CardPlot: FC<ICardPlotProps> = ({plot, fields}) => {
  delete plot.__EMPTY
  delete fields.__EMPTY
  return (
    <CardVue>

      {Object.keys(plot).map((item: string, index) =>
        <LineView key={index}>
          <BlockView>
            <CardText>
              {fields[item]}:
            </CardText>
          </BlockView>
          <BlockView>
            <CardText>
              {plot[item]}
            </CardText>
          </BlockView>
        </LineView>
      )}
    </CardVue>
  );
};