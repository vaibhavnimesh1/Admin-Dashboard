import { useState } from "react";
import "./Card.css";
import { motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

// { title, color, barValue, value, png, series }
const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div layout>
      {expanded ? (
        <ExpandedCard setExpanded={() => setExpanded(false)} param={props} />
      ) : (
        <CompactCard setExpanded={() => setExpanded(true)} param={props} />
      )}
    </motion.div>
  );
};

function CompactCard({ setExpanded, param }) {
  const Png = param.png;

  const handleCardClick = () => {
    setExpanded(false); // Close the expanded card
  };

  return (
    <div
      className="CompactCard"
      onClick={handleCardClick}
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}

function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      // your options here
    },
    series: param.series, // Pass the series data to the Chart component
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={() => setExpanded(false)} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart options={data.options} series={data.series} type="area" />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
