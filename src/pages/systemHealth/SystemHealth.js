import React from "react";
import "./SystemHealth.scss";
import Chart from "../../components/chart/Chart";
import { SystemHealthPageData } from "../../constants/Constants";

const SystemHealth = () => {
  return (
    <div className="systemHealth">
      <div className="leftContent">
        <h3>SystemHealth</h3>
        <p>{SystemHealthPageData.info}</p>
      </div>
      <Chart data={SystemHealthPageData.data} />
    </div>
  );
};

export default SystemHealth;
