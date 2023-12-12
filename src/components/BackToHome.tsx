import React from "react";
import { Link } from "react-router-dom";

const BackToHome = () => {
   return (
      <div className="go-to-home absolute top-4 left-5 w-fit">
         <Link to="/">
            <span className="flex items-center text-color-light-purple">
               Accueil
            </span>
         </Link>
      </div>
   );
};

export default BackToHome;
