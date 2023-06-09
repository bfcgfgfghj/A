import React, { useState } from "react";
import styles from "./LoginPage.module.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loggedIn } from "../../components/loginpage/LoginSlice";
import { SetErrorMessage } from "../errorLabel/ErrorMessageSlice";
import { OpenErrorMenu } from "../errorLabel/ErrorSlice";

export default function LoginPage() {
  const dispatch = useAppDispatch();

  let [Logindata, setLogindata] = useState({
    username: "user1",
    password: "password",
  });

  async function LogIn() {
    dispatch(loggedIn());
    sessionStorage.setItem("authkey", "A");
  }

  return (
    <div className={styles.LoginPage}>
      <h1>Login</h1>
      <Box>
        <TextField
          id="input-with-icon-textfield"
          label="Username"
          placeholder="Type your username"
          onChange={(event) => {
            setLogindata({
              username: event.target.value,
              password: Logindata.password,
            });
          }}
          InputProps={{
            startAdornment: <AccountCircle />,
            value: Logindata.username,
          }}
          variant="standard"
        />
      </Box>

      <Box>
        <TextField
          id="input-with-icon-textfield"
          label="Password"
          placeholder="Type your password"
          onChange={(event) => {
            setLogindata({
              username: Logindata.username,
              password: event.target.value,
            });
          }}
          value={Logindata.password}
          type="password"
          InputProps={{
            startAdornment: <LockIcon />,
          }}
          variant="standard"
        />
      </Box>

      <Button
        className={styles.LoginButton}
        variant="contained"
        size="large"
        onClick={() => {
          LogIn();
        }}
      >
        LOGIN
      </Button>
    </div>
  );
}
