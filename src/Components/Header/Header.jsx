import React from 'react'
import "./Header.css";
// import resumeImg from "../../Images/resume.svg"
import hireImg from "../../Images/hiring.svg";
import ArticleIcon from '@mui/icons-material/Article';
import Body from '../Body/Body';
import LogoutIcon from '@mui/icons-material/Logout';
import { Navigate, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';


function Header(props) {

  const userDetails = props.userDetails;
  const isAuthenticated = props.auth;
  const navigate = useNavigate();

  const handleLogout = async()=>{
    await signOut(auth);
    // navigate('/');
  }

  return isAuthenticated ? (

    <>
    <div>
    <div className='head'>
        <h1 className='heading'>Resume<span>Now</span><ArticleIcon fontSize='medium'/></h1>
        <div className='logout' onClick={handleLogout}>
          Logout<span>  </span><LogoutIcon sx={{
            height: "23px",
            width: "23px",
            transition:"200ms",
          }}/>
        </div>
    </div>
    <div className='container'>
    
        
        
        
        <div className='para-left'>
        <p className='para'>Building<span> Resume </span>for Success Stories.</p>
        <p className='para'>Make Your own resume. <span>It's free</span></p>
        <p className='para1'>Resume writing can be stressful, confusing, and time-consuming if you do it all on your own. With our Resume Maker, it’s quick, pain-free, and effective.</p>
        </div>
        <div className='para-right'>
            <img src={hireImg} alt='Resume'/>
        </div>
    
    </div>
    </div>
    <Body/>
    </>
  ):(
    <Navigate to="/"/>
  )
}

export default Header
