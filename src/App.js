import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/home/Home";
import SignIn from "./pages/signIn/SignIn";
import Settings from "./pages/settings/Settings";
import MyProfile from "./pages/myProfile/MyProfile";
import { ThemeContext } from "./contexts/theme-context";
import Customers from "./pages/customers/Customers";
import Dashboard from "./pages/dashboard/Dashboard";
import Delivery from "./pages/delivery/Delivery";
import Logs from "./pages/logs/Logs";
import Products from "./pages/products/Products";
import Stats from "./pages/stats/Stats";
import SystemHealth from "./pages/systemHealth/SystemHealth";

function App() {
  const getDefaultTheme = () => localStorage.getItem("default-theme");

  const [data, setData] = useState({ loading: true, loggedIn: false });
  const [theme, setTheme] = useState(getDefaultTheme());

  useEffect(() => {
    const user = localStorage.getItem("user");
    const username = user && JSON.parse(user)?.username;
    setData({ loading: false, loggedIn: !!username });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        {data.loading ? (
          <h1>Loading</h1>
        ) : data.loggedIn ? (
          <Routes>
            <Route path="/" element={<Home setData={setData} />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Customers" element={<Customers />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Delivery" element={<Delivery />} />
            <Route path="/Logs" element={<Logs />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Stats" element={<Stats />} />
            <Route path="/SystemHealth" element={<SystemHealth />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<SignIn setData={setData} />} />
          </Routes>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
