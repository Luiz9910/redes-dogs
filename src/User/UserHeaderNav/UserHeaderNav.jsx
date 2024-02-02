import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const {pathname} = useLocation()
  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.headerNav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <div>
            <img src="http://localhost:5173/Assets/feed.svg" alt="feed icon" />
            {mobile && "Minhas fotos"}
          </div>
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <div>
            <img
              src="http://localhost:5173/Assets/estatisticas.svg"
              alt="estatisticas icon"
            />
            {mobile && "Estatísticas"}
          </div>
        </NavLink>
        <NavLink to="/conta/postar">
          <div>
            <img
              src="http://localhost:5173/Assets/adicionar.svg"
              alt="adicionar icon"
            />
            {mobile && "Adicionar foto"}
          </div>
        </NavLink>
        <button onClick={userLogout}>
          <div>
            <img src="http://localhost:5173/Assets/sair.svg" alt="sair icon" />
            {mobile && "Sair"}
          </div>
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
