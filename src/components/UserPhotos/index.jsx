import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import {useParams, Link} from "react-router-dom";
import models from "../../modelData/models";


/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos () {
    const { userId } = useParams();
    const photo = models.photoOfUserModel(userId);
    console.log(photo);  
    if(!photo){
      return (
        <>
          <h3>Not Found</h3>
          <Link to={`/users/${userId}`}>Back</Link>
        </>
      )
    }
    return (
      <Typography variant="body1" >
        <ul>
        {photo.map((item) =>(
          <div key={item._id}>
            <img src={require(`../../images/${item.file_name}`)} alt="" style={{width:"300px", height:"200px"}} />
            <div>
              <label>Created At: </label>
            <span style={{ color: "red", fontWeight: "bold" }}>{item.date_time}</span>
            </div> 
            <div>
              <h4>Comment</h4>
              {(item.comments && item.comments.length > 0) ? (
                  (item.comments || []).map((comment) => (
                      <div key={comment._id} style={{ borderLeft: '3px solid #f0f0f0', paddingLeft: '10px', marginBottom: '10px' }}>
                          <Typography variant="body2" >
                              <Link to={`/users/${comment.user._id}`}><strong>{comment.user.first_name} {comment.user.last_name}:</strong></Link> {comment.comment}
                          </Typography>
                          <Typography variant="caption" color="textSecondary">
                              <label>Created At: </label>
                              <span style={{ fontStyle: "italic" }}>{comment.date_time}</span>
                          </Typography>
                      </div>
                  ))
              ) : (
                  <Typography variant="body2" color="textSecondary">Chưa có bình luận nào.</Typography>
              )}
              {console.log(item.comments)}
            </div>
          </div>
        ))}
        </ul>
      </Typography>
    );
}

export default UserPhotos;
