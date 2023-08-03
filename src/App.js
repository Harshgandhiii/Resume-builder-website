import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
// import Body from "./Components/Body/Body";
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";
import { auth, getUserFromDatabase } from "./firebase";
import Spinner from "./Components/spinner/Spinner";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails,setuserDetails] = useState({});

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const fetchUserDetails = async(uid) =>{
    
      const userDetails = await getUserFromDatabase(uid);
      setIsDataLoaded(true);
      setuserDetails(userDetails);
  }

  useEffect(()=>{
    const listener = auth.onAuthStateChanged(user =>{
      if(!user) {
        setIsDataLoaded(true);
        setIsAuthenticated(false);
        return;
      };

      setIsAuthenticated(true);
      fetchUserDetails(user.uid);
    });

    return () => listener;
  },[])
  return (
    <div className="App">
      
      <Router>
      {isDataLoaded ?(
      
        <Routes>
          {
            !isAuthenticated && 
            <>
          <Route path="/login" element={<Auth/>}/>
          <Route path="/Signup" element={<Auth signup/>}/>
            </>
          }
          <Route path="/" element={<Home auth={isAuthenticated}/>}/>
          <Route path="/header" element={<Header userDetails = {userDetails} auth={isAuthenticated}/>}/>
          {/* <Route path="/body" element={<Body/>}/> */}
        </Routes>
      ):(
        <div className="spinner">

<Spinner/></div>)}
      </Router>

      
      
    </div>
  );
}

export default App;
