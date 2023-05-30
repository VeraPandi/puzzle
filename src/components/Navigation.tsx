import React from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Navigation = () => {
   const navigate = useNavigate();

   const goToPreviousPage = () => {
      navigate(-1);
   };

   return (
      <nav className="navigation">
         <button
            className="back-btn black-btn flex justify-center items-center h-12 w-20 rounded-light"
            onClick={goToPreviousPage}
         >
            <BiArrowBack className="text-3xl text-color-white" />
         </button>
      </nav>
   );
};

export default Navigation;
