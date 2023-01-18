import "./profile.scss";

import Posts from "../../components/posts/Posts";
import { AuthContext } from "../../context/authContext";
import { useState, useContext } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/5771924/pexels-photo-5771924.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="cover"
        />
        <img
          src="https://i.pinimg.com/550x/c6/28/81/c62881d3cb7b1b6b79d4fb8fc45e8d72.jpg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="center">
            <span>Sasuke</span>
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
