import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

import { getUserByPassword } from "../../axios/users/users";

const Signin = ({ setData }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const target = event.target;
    let value = event.target.value;
    const name = target.name;
    if (target.name === "password") {
      document.getElementById(name).type = "password";
      value = event.target.value;
    }
    if (name === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
    document.getElementById(name).style.fontFamily = "Montserrat black";
  };

  const singInBtnClick = async () => {
    try {
      if (username.length && password.length) {
        const {
          data: { user },
        } = await getUserByPassword(password);
        if (user) {
          localStorage.setItem("user", JSON.stringify({ username: user.name }));
          setData({ loading: false, loggedIn: true });
          navigate("/");
          return;
        }
        setErrorMsg(true);
      }
      setErrorMsg(true);
    } catch (error) {
      setErrorMsg(true);
    }
  };

  const continueWithGuest = () => {
    localStorage.setItem("user", JSON.stringify({ username: "Guest" }));
    setData({ loading: false, loggedIn: true });
    navigate("/");
  };

  return (
    <div className="login">
      <h4>Sign In</h4>
      <form className="formSignIn">
        <div className="text_area">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Name"
            onChange={handleInputChange}
            onFocus={() => setErrorMsg(false)}
            className="text_input"
          />
        </div>
        <div className="text_area">
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
            onFocus={() => setErrorMsg(false)}
            className="text_input"
          />
        </div>
        <div className="errorMsgContent">
          {errorMsg && (
            <h5 className="errorMsg">Name or password is incorect</h5>
          )}
        </div>
      </form>
      <div className="bottomContent">
        <button className="btn" onClick={singInBtnClick}>
          SIGN IN
        </button>
        <button className="guestBtn" onClick={continueWithGuest}>
          Guest
        </button>
      </div>
    </div>
  );
};
export default Signin;
