import React from "react";
import Title from "../components/Title";
import Form from "../components/form/Form";

const Login = () => {
   return (
      <div className="page bg-beige-texture grayscale-[30%] tablet:rounded-light tablet:m-10 tablet:border-[3px] tablet:border-color-black">
         <main className="main h-screen flex flex-col justify-evenly tablet:rounded-medium">
            <header className="flex flex-wrap justify-center items-center">
               <span className="py-4 px-5 text-7xl font-marker text-color-light-purple">
                  Jigsaw
               </span>
               <Title
                  text="Puzzle"
                  styles="px-5 pt-4 pb-4 text-7xl text-color-light-red"
               />
            </header>
            <Form />
         </main>
      </div>
   );
};

export default Login;
