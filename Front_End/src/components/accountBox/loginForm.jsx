import React, { useContext,useState } from "react";
import {
  BoldLink,
  BoxContainer, 
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { Navigate,Link } from 'react-router-dom';
import Axios from "axios";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [goToAccountContext, setGoToAccountContect]=React.useState(false);

   
  // const [firstName, setFirstName]= useState('')
  // const [middleName, setMiddleName]= useState('')
  // const [lastLame, setLastName]= useState('')
  // const [telNo, setTelNo]= useState('')
  // const [address, setAddress]= useState('')
  const [email, setEmail]= useState(" ")
  const [userId, setUserId]= useState(" ")
  //const [password, setPassword]= useState('')
  

  // user_id, first_name, middle_name, last_name,  tel_no, address, email,password

      if(goToAccountContext){
        return <Navigate  to="/aDashboard" />;
      }

      const login=()=>{
          Axios.post("http://localhost:3010/api/insert", {userId: userId, email: email,}).then(()=>{
           // alert("record saved!")
          <Navigate to ="/aDashBoard" />;
            
          })
      }
  return (
    <BoxContainer>
      <FormContainer>
      <Input type="text" name ="userId" placeholder="User Id" onChange={(e)=>{
          setUserId(e.target.value)
        }} />
        <Input type="text" name ="email" placeholder="Email" onChange={(e)=>{
          setEmail(e.target.value)
        }} />
        {/* <Input type="password" placeholder="Password" onChange={()=>{
          setPassword(e.target.value)
        }} /> */}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      {/* <SubmitButton type="submit">Signin</SubmitButton> */}
      <SubmitButton type="submit" onClick={login}>login</SubmitButton>
      {/* <button onClick={login}>Login</button> */}
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
          
        </BoldLink>
        {/* <Link to="/homepage">Log In</Link> */}

      </MutedLink>
    </BoxContainer>
  );
}
