import React from "react";
import "./Delivery.scss";
import Chart from "../../components/chart/Chart";
import { DeliveryPageData } from "../../constants/Constants";

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="leftContent">
        <h3>Delivery</h3>
        <p>{DeliveryPageData.info}</p>
      </div>
      <Chart data={DeliveryPageData.data} />
    </div>
  );
};

export default Delivery;
