import React from "react";
import "./Stats.scss";
import Chart from "../../components/chart/Chart";
import { StatsPageData } from "../../constants/Constants";

const Stats = () => {
  return (
    <div className="stats">
      <div className="leftContent">
        <h3>Stats</h3>
        <p>{StatsPageData.info}</p>
      </div>
      <Chart data={StatsPageData.data} />
    </div>
  );
};

export default Stats;
