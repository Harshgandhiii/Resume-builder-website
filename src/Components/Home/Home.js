import React from 'react'
import styles from "./Home.module.css";
import { Button } from '@mui/material';
import cv from "../../Images/cv.svg"
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home(props) {

    const navigate = useNavigate();

    const isAuthenticated = props.auth ? true : false;

    const handleNextButtonClick = () => {
      if(isAuthenticated)
        navigate("/header");
      else{
        navigate("/login");
      }
    };
  return (
    <div className={styles.gcontainer}> 
      <div className={styles.gheader}>
        <div className={styles.gleft}>
            <p className={styles.gheading}>
            Resume<span>Now</span>
            </p>
            <p className={styles.gsubheading}>
                Building Resume for success stories.
            </p>
            <Button onClick={handleNextButtonClick} sx={{
                textTransform: 'capitalize',
                borderRadius: 2,
                backgroundColor: "#66CC66",
                color: '#fff',
                width: "fit-content",
                border: 'none',
                outline: 'none',
                letterSpacing: 1,
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: 15,
                display: "flex",
                transition: "200ms",
                "&:hover": {
                    backgroundColor: "#397139",
                },
                "&:active":{
                    transform:"translateY(1px)",
                },
                padding: "8px 16px",
            }}>{isAuthenticated ? "Make Resume" : "Get Started"} <ArrowForwardIcon></ArrowForwardIcon></Button>
        </div>
        <div className={styles.gright}>
            <img src={cv} alt="Projects"/>
        </div>
      </div>
    </div>
  )
}

export default Home
