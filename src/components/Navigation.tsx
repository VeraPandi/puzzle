import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
   const navigate = useNavigate();
   const goToPreviousPage = () => {
      navigate(-1);
   };

   return (
      <nav className="navigation absolute top-0 left-0 m-5">
         <button
            className="back-btn px-20 pt-4 pb-6 border-solid border-2 border-green-200 rounded-md text-white text-2xl font-bold bg-slate-600"
            onClick={goToPreviousPage}
         >
            Retour
         </button>
      </nav>
   );
};

export default Navigation;
