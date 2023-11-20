import React, { useEffect, useState } from "react";
import "./MyProfile.css"; // Import the CSS file

import MyImage from '../../assets/cv.jpg';

const Profile = () => {
  const [data, setData] = useState({ loading: true, username: "" });
  useEffect(() => {
    const user = localStorage.getItem("user");
    const username = user && JSON.parse(user)?.username;
    setData({ loading: false, username });
  }, []);

  return (
    <div className="profile">
      {data.loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h1>Admin</h1>
        </div>
      )}
      <img style={{height: 600, width: 400}} src={MyImage} />

    </div>
  );
};

export default Profile;
