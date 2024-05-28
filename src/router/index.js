import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../routes/user/Register";
import Login from "../routes/user/Login";
import NotFound from '../components/NotFound.js'
import Home from "../routes/home/index.js";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"*"} element={<NotFound/>}></Route>
        <Route path={"/register"} element={<Register />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes;