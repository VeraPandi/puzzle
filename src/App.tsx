import React from "react";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import User from "./pages/User";
import Board from "./pages/Board";
import Game from "./pages/Game";
import PrivateRoutes from "./utils/PrivateRoutes";
import "./index.css";

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoutes />}>
               <Route path="/user" element={<User />} />
               <Route path="/board/:category" element={<Board />} />
               <Route path="/game" element={<Game />} />
               <Route path="*" element={<Navigate replace to="/user" />} />
            </Route>
         </Routes>
      </Router>
   );
}

export default App;
