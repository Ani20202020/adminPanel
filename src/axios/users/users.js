import axios from "axios";
import { Hosts, Endpoints } from "../../constants/Constants";

export const getUserByPassword = (password) => {
  console.log('aaaaaa')
  return axios.get(`${Hosts.localhost}${Endpoints.users}${password}`);
};