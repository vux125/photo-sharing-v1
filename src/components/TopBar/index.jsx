import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import models from "../../modelData/models";

import "./styles.css";


function TopBar () {
  const [context, setContext] = useState("");
  const location = useLocation();
  
  
  console.log(location.pathname.startsWith("/users"));
  useEffect(() => {
    const path = location.pathname;
    const params = path.split("/");
    if (params[1] === "users" ) {
      const user = models.userModel(params[2]);
      console.log(user)
      if (user) {
        setContext(`${user.first_name} ${user.last_name}`);
      } else {
        setContext("");
      }
    }
    else if (params[1] === "photos") {
      const user = models.userModel(params[2]);
      if (user) {
        setContext(`Photos of ${user.first_name} ${user.last_name}`);
      } else {
        setContext("");
      }
    }
    else {
      setContext("");
    }
  }, [location]);

    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Tran Van Vu - B22DCAT318
          </Typography>
          <Typography variant="h6" color="inherit" sx={{ flexGrow: 1, textAlign: "right" }}>
          {context}
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;
