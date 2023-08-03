import React from 'react'
import styles from './Auth.module.css'
import InputCont from '../InputCont/InputCont';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, updateUserDatabase } from '../../firebase';
import { useState } from 'react';

function Auth(props) {
  const isSignup = props.signup ? true : false;
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);


  const handleLogin = () => {
    if (!values.email || !values.password) {
      setErrorMsg("All fields required");
      return;
    }
    setSubmitButtonDisabled(true)
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async () => {
       
        // const userId = response.user.uid;
        // await updateUserDatabase({ name: values.name, email: values.email }, userId);

        setSubmitButtonDisabled(false)
        navigate("/");
        
      })
      .catch((err) => {
        setSubmitButtonDisabled(false)
        setErrorMsg(err.message);
      })
  }

  const handleSignup = () => {
    if (!values.name || !values.email || !values.password) {
      setErrorMsg("All fields required");
      return;
    }
    setSubmitButtonDisabled(true)
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (response) => {
       
        const userId = response.user.uid;
        await updateUserDatabase({ name: values.name, email: values.email }, userId);
        setSubmitButtonDisabled(false)
        navigate("/")
        
      })
      .catch((err) => {
        setSubmitButtonDisabled(false)
        setErrorMsg(err.message);
      })
  }

  const handleSubmission = (event) => {
    event.preventDefault();

    if (isSignup) handleSignup();
    else handleLogin();
  }

  return (
    <div className={styles.container}>

      <form className={styles.form} onSubmit={handleSubmission}>

        <p className={styles.smallLink}>
          <Link to="/">{"<back to home"}</Link>
        </p>
        <p className={styles.heading}>{isSignup ? "Signup" : "Login"}</p>

        {isSignup && (<InputCont label="Name" placeholder="Enter your name" onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} />)}
        <InputCont label="Email" placeholder="Enter your email" onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />
        <InputCont label="Password" placeholder="Enter your password" isPassword onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value }))} />

        <p className={styles.error}>{errorMsg}</p>

        <Button type='submit'
          disabled={submitButtonDisabled}
          sx={{
            textTransform: 'capitalize',
            borderRadius: 2,
            backgroundColor: "#66CC66",
            color: '#fff',
            width: "100%",
            border: 'none',
            outline: 'none',
            letterSpacing: 1,
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '15',
            display: "flex",
            transition: "200ms",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 16px",
            "&:hover": {
              backgroundColor: "#397139",
            },
            "&:active": {
              transform: "translateY(1px)",
            },
            "&:disabled": {
              backgroundColor: "gray !important",
            },

          }}>{isSignup ? "Sign up" : "Login"}</Button>

        <div className={styles.bottom}>
          {isSignup ? (
            <p>
              Already have an account ? <Link to="/login">Login here</Link>
            </p>
          ) : (
            <p>
              New here ? <Link to="/signup">Create an account</Link>
            </p>
          )}
        </div>
      </form>

    </div>
  )
}

export default Auth
