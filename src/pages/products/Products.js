import React from "react";
import "./Products.scss";
import Chart from "../../components/chart/Chart";
import { ProductsPageData } from "../../constants/Constants";

const Products = () => {
  return (
    <div className="products">
      <div className="leftContent">
        <h3>Products</h3>
        <p>{ProductsPageData.info}</p>
      </div>
      <Chart data={ProductsPageData.data} />
    </div>
  );
};

export default Products;
