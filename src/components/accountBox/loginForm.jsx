import React, { useContext } from "react";
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
import { Navigate } from 'react-router-dom';

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [goToAccountContext, setGoToAccountContect]=React.useState(false);

      if(goToAccountContext){
        return <Navigate  to="/aDashboard" />;
      }
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      {/* <SubmitButton type="submit">Signin</SubmitButton> */}
      <SubmitButton type="submit" onClick={()=>{
        setGoToAccountContect(true)
      }}>login</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
          
        </BoldLink>
        {/* <Link to="/login">Log In</Link> */}

      </MutedLink>
    </BoxContainer>
  );
}
