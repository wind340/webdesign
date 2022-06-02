import { authService } from "fbase";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  FormWrap,
  FormContent,
  FormH1,
  FormInput,
  FormButton,
  FormLabel,
  Container,
  Icon,
  Form,
  FormLink,
  Text,
} from "./SigninElements";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChange = event => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async event => {
    event.preventDefault();
    try {
      const data = await signInWithEmailAndPassword(
        authService,
        email,
        password
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/#">site</Icon>
          <FormContent>
            <Form action="#">
              <FormH1> Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                name="email"
                type="email"
                required
                value={email}
                onChange={onChange}
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                name="password"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={onChange}
              />
              <FormButton type="submit">Continue</FormButton>
              <FormLink to="/Register">
                Don't have an Account?
                <br /> Creact an account here
              </FormLink>
              <Text>{error}</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
