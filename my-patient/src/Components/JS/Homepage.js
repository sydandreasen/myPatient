import React, { useState } from "react";
import { Button, Input } from "antd";
import logo_full from "../../Images/Logo_Full.png";
import "antd/dist/antd.css";
import { base } from "../../utils/firebase.js";

const login = async (values) => {
  try {
    await base.auth().signInWithEmailAndPassword(values.email, values.password);
  } catch (error) {
    alert(error);
  }
};

function Homepage(props) {
  const [userSelected, setUserSelected] = useState(false);
  const [password, setPassword] = useState("");
  const [docSelected, setDocSelected] = useState("");

  return (
    <div className="home">
      <header>
        <img
          className="logoImage"
          alt="myPatientLogo"
          width={"30%"}
          src={logo_full}
        />
        <h2>say goodbye to clipboards and papers!</h2>
      </header>
      <div className="faculty-login">
        <h1>UNMC Physician Login</h1>
      </div>
      <div className="grid-2fr-1fr">
        <div className="left-col">
          <h2 style={{ color: "#707070" }}>Select User</h2>
          <div className="doc-buttons">
            {/* buttons */}
            {props.docs.map((doc) => (
              <Button
                type="primary"
                shape="round"
                size="large"
                key={doc.name}
                onClick={(e) => {
                  setUserSelected(true);
                  setDocSelected(e.target.outerText);
                }}
              >
                {doc.name}
              </Button>
            ))}
          </div>
        </div>
        <div
          className="right-col"
          style={{ display: userSelected ? "block" : "none" }}
        >
          <h2 style={{ color: "#707070" }}>Enter Password</h2>
          <Input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onPressEnter={() =>
              login({
                email: props.docs.filter((doc) => doc.name === docSelected)[0]
                  .email,
                password: password,
              })
            }
          />
          <br />
          <Button
            id="loginButton"
            type="primary"
            shape="round"
            size="large"
            onClick={() => {
              login({
                email: props.docs.filter((doc) => doc.name === docSelected)[0]
                  .email,
                password: password,
              });
            }}
          >
            Login
          </Button>
        </div>
      </div>
      <footer>
        <h3>HackUNO 2021</h3>
        <h3>Justin Rathbone & Sydney Andreasen</h3>
      </footer>
    </div>
  );
}

export default Homepage;
