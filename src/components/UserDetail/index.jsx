import React from "react";
import { Typography} from "@mui/material";

import "./styles.css";
import {useParams, Link} from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const user = useParams();
    const users = models.userListModel();
    const userinfo = users.find((i) => (i._id === user.userId));
    if(!userinfo){
      return <alert>Invalid ID {user.userId}</alert>;
    }
    return (
        <>
          <Typography variant="body1">
            <div>
              <label>First Name: </label>
              <span style={{color:"green", fontWeight: "bold"}}>{userinfo.first_name}</span>
            </div>
            <div>
              <label>Last Name: </label>
              <span style={{color:"red", fontWeight: "bold"}}>{userinfo.last_name}</span>
            </div>
            <div>
              <label>Location: </label>
              <span style={{color:"purple", fontWeight: "bold"}}>{userinfo.location}</span>
            </div>
            <div>
              <label>Occupation: </label>
              <span style={{color:"pink", fontWeight: "bold"}}>{userinfo.occupation}</span>
            </div>
            <div>
              <label>Description: </label>
              <span style={{fontStyle: "italic"}}>{userinfo.description}</span>
            </div>
            <div>
              <Link to={`/photos/${userinfo._id}`}>View photo</Link>
            </div>
          </Typography>
        </>
      
    );
}

export default UserDetail;
