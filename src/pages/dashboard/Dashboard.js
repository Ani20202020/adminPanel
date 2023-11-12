import React from "react";
import "./Dashboard.scss";
import Chart from "../../components/chart/Chart";
import { DashboardPageData } from "../../constants/Constants";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="leftContent">
        <h3>Dashboard</h3>
        <p>{DashboardPageData.info}</p>
      </div>
      <Chart data={DashboardPageData.data} />
    </div>
  );
};

export default Dashboard;
