import React, { useContext } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";

const Header = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <img src="http://localhost:5173/Assets\dogs.svg" alt="logo" />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
