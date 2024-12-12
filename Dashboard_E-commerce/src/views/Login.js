import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import { loginUser } from "../redux/auth/userSlice";

const cookies = new Cookies(null, { path: "/" });

const Login = () => {
  //state
  const [EMAIL, setEmail] = useState("");
  const [PASSWORD, setPassword] = useState("");

  //redux state
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerLoginEvent = (e) => {
    e.preventDefault();
    let userCredentials = {
      EMAIL,
      PASSWORD,
    };
    dispatch(loginUser(userCredentials)).then((result) => {
      const accessToken = result.payload.status.elements.accessToken;
      const refreshToken = result.payload.status.elements.refreshToken;
      cookies.set("accessToken", accessToken);
      cookies.set("refreshToken", refreshToken);
      if (!result.error) {
        if (result.payload) {
          setEmail("");
          setPassword("");
          navigate("/dashboard");
        }
      }
    });
  };

  return (
    <div className="Login">
      <div className="box-login p-3">
        <div className="titleLogin h3 text-center">Login to Administrator</div>
        <Form className="loginForm" onSubmit={handlerLoginEvent}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
              value={EMAIL}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
              value={PASSWORD}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <div className="buttonLogin mr-5">
            <Button className="btn btn-md" color="secondary" type="submit">
              {loading ? "Loading..." : "Login"}
            </Button>
            <br></br>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
