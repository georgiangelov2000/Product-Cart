import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../actions/auth";

const UpdateProfile = () => {
  return (
    <div className="mt-5">
      <form className="w-50 text-center m-auto ">
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput2">Username</label>
          <input
            type="texxt"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="username"
          />
        </div>{" "}
        <div className="form-group">
          <label for="exampleFormControlInput3">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput3"
            placeholder="password"
          />
        </div>
        <button btn-sm type="button" class="btn btn-pill btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
