import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signin from "./Signin"

export default function AllRouters(){
    return(
        <Routes>
            <Route path="/home" element={<Home />}> </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
        </Routes>
    )
}