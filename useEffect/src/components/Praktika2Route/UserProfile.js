import React from "react";
import { useNavigate, useParams } from "react-router-dom";


function UserProfile() {
    return fetch('https://api.github.com/users/${name}')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
 }


export default UserProfile;