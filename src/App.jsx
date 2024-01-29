import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/login/Login/Login";
import "./App.css";
import { UserStorage } from "./Context/UserContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
