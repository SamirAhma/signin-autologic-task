import React from "react";

import "./App.css";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import Facebook from "./components/Facebook";

function App() {
  return (
    <div className="box-container">
      <Form className="login-form">
        <div></div>
        <h5 className="text-center heading">LOGIN</h5>

        <FormGroup>
          <input
            type="email"
            placeholder="Email"
            className="input input-div"
          ></input>
          {/* <div className="input-div"></div> */}
        </FormGroup>

        <FormGroup>
          <input
            type="password"
            placeholder="Password"
            className="input input-div"
          ></input>
          {/* <div className="input-div"></div> */}
        </FormGroup>

        <div className="forget_text">
          <a className="text_small underline">Forget your password?</a>

          <div className="container-memorize">
            <a className="text_small">MEMORIZE</a>
            <div>
              <label className="switch">
                no
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        <Button className="btn">LOGIN</Button>
        <a className="text_small">
          No account? <span className="underline">Register now</span>
        </a>
      </Form>
      <Facebook style={{ marginTop: "20px" }}></Facebook>
    </div>
  );
}

export default App;
