import "./Cards.css";
import Card from "../Card/Card";
import { cardsData } from "../../Data/Data";

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((item, i) => (
        <div key={i} className="parentContainer">
          <Card
            title={item.title}
            color={item.color}
            barValue={item.barValue}
            value={item.value}
            png={item.png}
            series={item.series}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
