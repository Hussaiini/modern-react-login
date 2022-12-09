import React from 'react'
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'

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
    <AppContainer>
      <AccountBox />
    </AppContainer>
    <Routes>
      <Route path="/adminPage" element={<AdminDashboard/>}/>

    
    </Routes>
    </Router>
  );
}

export default App;
