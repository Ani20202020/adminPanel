import React from "react";
import "./Products.scss";
import { ProductsPageData } from "../../constants/Constants";
import { useEffect, useState } from "react";
function Products() {
  const [data, setData] = useState([]);
  const [collection, setColection] = useState([]);
  useEffect(() => {
    setData(ProductsPageData.data);
    setColection([...new Set(ProductsPageData.data.map((item) => item.title))]);
  }, []);
  const gallery_filter = (itemData) => {
    const filterData = ProductsPageData.data.filter(
      (item) => item.title === itemData
    );
    setData(filterData);
  };
  return (
    <div className="product">
      <p className="products">{ProductsPageData.info}</p>
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li>
              <button onClick={() => setData(ProductsPageData.data)}>
                All
              </button>
            </li>
            {collection.map((item) => (
              <li>
                <button
                  onClick={() => {
                    gallery_filter(item);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="galleryConteiner">
          {data.map((item) => (
            <div key={item.id} className="galleryItem">
              {" "}
              <img src={item.img} alt="clothes" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
