import axios from "axios";
import { Hosts, Endpoints } from "../../constants/Constants";

export const getAllCustomers = () => {
  return axios.get(`${Hosts.localhost}${Endpoints.customers}`);
};

export const addCustomer = (data) => {
  return axios.post(`${Hosts.localhost}${Endpoints.customers}`, data);
};

export const removeCustomer = (id) => {
  return axios.delete(`${Hosts.localhost}${Endpoints.customers}${id}`);
};
