import { authService } from "fbase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
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
  const [newAccount, setNewAccount] = useState(true);
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
      let data;
      const auth = getAuth();
      if (newAccount) {
        const data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        const data = await signInWithEmailAndPassword(
          authService,
          email,
          password
        );
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount(prev => !prev);

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/#">site</Icon>
          <FormContent>
            <Form action="#" onSubmit={onSubmit}>
              <FormH1>{newAccount ? "가입하기" : "로그인"}</FormH1>

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
              <FormInput
                type="submit"
                value={newAccount ? "가입하기" : "로그인"}
              />
              <FormButton onClick={toggleAccount}>
                {newAccount ? "로그인하러가기" : "회원가입하러가기"}
              </FormButton>

              <Text>{error.substring(9)}</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
