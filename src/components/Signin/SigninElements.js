import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #fff;
  width: 375px;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 60px 40px;
  border-radius: 4px;
  box-shadow: 4px;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  } ;
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #010606;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #010606;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: solid 1px;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
`;

export const FormLink = styled(Link)`
  font-size: 14px;
  text-align: center;
  padding: 30px 0 0 0;
  color: #01bf71;
  border: none;
  border-radius: 4px;
`;

export const Text = styled.p`
  padding: 20px 0 0 0;
  font-size: 12px;
  color: red;
  text-align: center;
`;
