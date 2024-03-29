import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import LoginPasswordReset from "../LoginPasswordReset";
import LoginPasswordLost from "../LoginPasswordLost";
import LoginCreate from "../LoginCreate/LoginCreate";
import { UserContext } from "../../../../Context/UserContext";
import styles from "./Login.module.css";
import NotFound from "../../../NotFound";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </section>
  );
};

export default Login;
