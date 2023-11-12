import React from "react";
import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widgets/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

import { HomePageData } from '../../constants/Constants'

const Home = ({ setData }) => {
  return (
    <div className="home">
      <Sidebar setData={setData} />
      <div className="homeConteiner">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart data={HomePageData.data} />
        </div>
      </div>
    </div>
  );
};

export default Home;
