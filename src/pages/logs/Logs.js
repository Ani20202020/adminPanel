import React from "react";
import "./Logs.scss";
import Chart from "../../components/chart/Chart";
import { LogsPageData } from "../../constants/Constants";

const Logs = () => {
  return (
    <div className="logs">
      <div className="leftContent">
        <h3>Logs</h3>
        <p>{LogsPageData.info}</p>
      </div>
      <Chart data={LogsPageData.data} />
    </div>
  );
};

export default Logs;
