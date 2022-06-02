import React, { useState } from "react";
import { authService } from "../../fbase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {
  Container,
  FormWrapper,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormButton,
  FormLabel,
  FormLink,
  Text,
} from "./RegisterElements";

const Register = () => {
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
      const auth = getAuth();
      const data = await createUserWithEmailAndPassword(
        authService,
        email,
        password
      );
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Container>
      <FormWrapper>
        <Icon to="/">site</Icon>
        <FormContent>
          <Form onSubmit={onSubmit} className="container">
            <FormH1> Create your account</FormH1>
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
              required
              value={password}
              onChange={onChange}
            />
            <FormButton type="submit">Create</FormButton>
            <Text>{error}</Text>
            <FormLink to="/signin">
              Already have an Account?
              <br /> Sign in here
            </FormLink>
          </Form>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};

export default Register;
