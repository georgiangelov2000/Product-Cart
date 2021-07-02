import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getUserDetails  } from "../../../actions/auth";

const UpdateProfile = () => {

  const dispatch= useDispatch()

  
  const currentUser = useSelector((state)=>state.auth);
  
  
  useEffect(() => {
    dispatch( getUserDetails() )
  }, [])
  

  return (<div></div>);
};

export default UpdateProfile;
