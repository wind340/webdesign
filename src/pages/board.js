import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import SigninPage from "./signin";

const RegisterPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? (
        <>
          <ScrollToTop />
          <BoardPage />
        </>
      ) : (
        <>
          <ScrollToTop />
          <SigninPage />
        </>
      )}
    </>
  );
};

export default RegisterPage;
