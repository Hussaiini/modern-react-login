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
  
const [username,setUserName] = useState("")
const [password, setPassword]= useState("")

const [loginStatus, setLoginStatus]= useState("")


  // user_id, first_name, middle_name, last_name,  tel_no, address, email,password

      if(goToAccountContext){
        return <Navigate  to="/aDashboard" />;
      }

      const register=()=>{
         Axios.post("http://localhost:3010/api/insert", {userId: userId, email: email,}).then(()=>{
           alert("record saved!")
          //  return <Navigate to ="/aDashBoard" />;
            
          })
      }

      const login=()=>{
        Axios.post("http://localhost:3010/login", {
          username: username,
           password: password,})
           .then((response)=>{
          //alert("record saved!")
         //  return <Navigate to ="/aDashBoard" />;
         if (response.data.message){
          setLoginStatus(response.data.message)
         } else {
          setLoginStatus(response.data[0].username)
         }
        
           
         })
     }
  // return (
  //   <BoxContainer>
  //     <FormContainer>
  //     <Input type="text" name ="userId" placeholder="User Id" onChange={(e)=>{
  //         setUserId(e.target.value)
  //       }} />
  //       <Input type="text" name ="email" placeholder="Email" onChange={(e)=>{
  //         setEmail(e.target.value)
  //       }} />
  //       {/* <Input type="password" placeholder="Password" onChange={()=>{
  //         setPassword(e.target.value)
  //       }} /> */}
  //     </FormContainer>
  //     <Marginer direction="vertical" margin={10} />
  //     <MutedLink href="#">Forget your password?</MutedLink>
  //     <Marginer direction="vertical" margin="1.6em" />
  //     {/* <SubmitButton type="submit">Signin</SubmitButton> */}
  //     <SubmitButton type="submit" onClick={login}>login</SubmitButton>
  //     {/* <button onClick={login}>Login</button> */}
  //     <Marginer direction="vertical" margin="1em" />
  //     <MutedLink href="#">
  //       Don't have an accoun?{" "}
  //       <BoldLink href="#" onClick={switchToSignup}>
  //         Signup
          
  //       </BoldLink>
  //       {/* <Link to="/homepage">Log In</Link> */}

  //     </MutedLink>
  //   </BoxContainer>
  // );


  return (
    <BoxContainer>
      <FormContainer>
      <Input type="text" name ="username" placeholder="User Name" onChange={(e)=>{
          setUserName(e.target.value)
        }} />
        <Input type="password" name ="password" placeholder="Password" onChange={(e)=>{
          setPassword(e.target.value)
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
      <h2>{loginStatus}</h2>
    </BoxContainer>
  );
}
