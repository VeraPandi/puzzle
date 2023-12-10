import React from "react";
import RegistrationForm from "../components/forms/RegistrationForm";

const Registration = () => {
   return (
      <div className="page h-screen bg-beige-texture grayscale-[30%] maxTablet:h-screen desktop:mx-10 desktop:my-9 desktop:border-[3px] desktop:border-color-black desktop:rounded-light">
         <main className="main flex flex-col justify-evenly h-screen maxTablet:h-full desktop:rounded-medium">
            <header className="flex flex-wrap justify-center items-baseline">
               <span className="py-4 px-5 text-7xl font-marker text-color-light-purple">
                  Jigsaw
               </span>
               <span className="py-4 px-5 text-7xl font-marker text-color-light-red">
                  Puzzle
               </span>
            </header>
            <RegistrationForm />
         </main>
      </div>
   );
};

export default Registration;
