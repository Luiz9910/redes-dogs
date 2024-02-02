import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/login/Login/Login";
import "./App.css";
import { UserStorage } from "./Context/UserContext";
import User from "./User/User";
import ProtecredRoute from "./helper/ProtecredRoute";
import Photo from "./components/Photo/Photo";
import UserProfile from "./User/UserProfile";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="app-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtecredRoute>
                    <User />
                  </ProtecredRoute>
                }
              />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
