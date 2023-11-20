import React, { useEffect, useState } from "react";
import "./Customers.scss";
import { addCustomer, getAllCustomers, removeCustomer } from "../../axios/customers/customers";
const Customers = () => {
  const [customersRequest, setCustomersRequest] = useState({
    loading: true,
    customers: [],
  });
  const [errorMsg, setErrorMsg] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const fetchData = async () => {
    try {
      const { data } = await getAllCustomers();
      setCustomersRequest({ loading: false, customers: data });
    } catch (error) {
      console.log("Get customers Error:", error);
      setCustomersRequest({ loading: false, customers: [] });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const target = event.target;
    let value = event.target.value;
    const name = target.name;
    switch(name){
      case "name":
        setName(value);
        break;
      case "surname":
        setSurname(value);
        break;
      case "address":
        setAddress(value);
        break;
    }
  };

  const addBtnClick = async () => {
    try {
      const data = {
        name,
        surname,
        address,
      };
      await addCustomer(data);
      fetchData();
    } catch (error) {
      console.log("Add customers Error:", error);
    }
  };

    const removeBtnOnClick = async (id) => {
        try {
            await removeCustomer(id);
            fetchData();
        } catch (error) {
            console.log("Remove customers Error:", error);
        }
  };
  return (
    
    <div className="customers">
     <h2 className="title">ToDo List</h2>
      {customersRequest.loading ? (
        <h1>...Loading</h1>
      ) : (
          <div>

          <div className="formContent">
            <div className="text_area">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                onChange={handleInputChange}
                onFocus={() => setErrorMsg(false)}
                className="text_input"
              />
            </div>
            <div className="text_area">
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Surname"
                onChange={handleInputChange}
                onFocus={() => setErrorMsg(false)}
                className="text_input"
              />
              </div>
              
            <div className="text_area">
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                onChange={handleInputChange}
                onFocus={() => setErrorMsg(false)}
                className="text_input"
              />
            </div>
            <button className="btnStyle" onClick={addBtnClick}>
              Add
            </button>
          </div>
          <div className="errorMsgContent">
            {errorMsg && (
              <h5 className="errorMsg">Name or password is incorect</h5>
            )}
          </div>
          <div className="lists">
            <table className="customerTable">
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Lastname</th>
                  <th>Address</th>
                  <th>Remove</th>
                </tr>
              </tbody>
              {customersRequest.customers.map((customer,index) => {
                return (
                  <tbody key={customer.id}>
                    <tr>
                      {Object.entries(customer).map(([key,value]) => {
                        return <td key={`${key}-${index}`}> {key ==="id"? index + 1 :value || "-"}</td>;
                      })}
                      <td>
                        <button onClick={() => removeBtnOnClick(customer.id)}>-</button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;
