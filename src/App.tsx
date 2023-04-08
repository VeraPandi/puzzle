import React from "react";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import User from "./pages/User";
import BoardImages from "./pages/BoardImages";
import BoardGame from "./pages/BoardGame";
import PrivateRoutes from "./utils/PrivateRoutes";
import "./index.css";

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoutes />}>
               <Route path="/user" element={<User />} />
               <Route path="/images/:category" element={<BoardImages />} />
               <Route path="/board-game" element={<BoardGame />} />
               <Route path="*" element={<Navigate replace to="/user" />} />
            </Route>
         </Routes>
      </Router>
   );
}

export default App;
