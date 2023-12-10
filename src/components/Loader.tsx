import React from "react";

const Loader = () => {
   return (
      <section className="loader flex flex-col justify-center items-center w-full min-h-[62vh] text-3xl maxTablet:height-calc">
         <div className="loader-spinner my-7">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
         <span className="loader-text my-7">Chargement</span>
      </section>
   );
};

export default Loader;
