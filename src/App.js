import React from 'react'
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import HomePage from './pages/HomePage'
 import loginForm from "./components/accountBox/loginForm"
 //import AccountBox from "./components/accountBox"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Router>
     
    
    <Routes>
    <Route path ="/" element ={<AppContainer><AccountBox /></AppContainer>}/>
      {/* <Route path="/" element={<loginForm/>}/> */}
      <Route path="/aDashBoard" element={<AdminDashboard/>} />
      <Route path="/homepage" element ={<HomePage/>} />

      {/* <Route path="/adminPage" element={<AdminDashboard/>}/> */}

    </Routes>
    </Router>
  );
}

export default App;
