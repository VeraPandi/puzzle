import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { createImageSlice } from "../service/api";
import { createImageSlice } from "../service/mocks/api";
import { useUserStore } from "../stores/user";

const Login = () => {
   // ------- Storage cleanup for development ------- //
   //    localStorage.clear();
   // ----------------------------------------------- //

   const { users, addUser, loginUser, addImages } = useUserStore();
   const { imageDatas, fetchImages } = createImageSlice();
   const [inputValue, setInputValue] = useState<string>("");

   useEffect(() => {
      fetchImages();
   }, []);

   // Invalidate empty input submission
   const inputValueLengthIsValid = (inputValue.length >= 2 &&
      inputValue.length <= 15) as true;

   const handleAddUser = () => {
      addUser(inputValue);
      addImages(inputValue, imageDatas);
      loginUser(inputValue);
   };

   const handleLoginUser = () => {
      loginUser(inputValue);
   };

   return (
      <main className="main flex flex-col items-center justify-evenly h-screen m-20 bg-slate-300">
         <h1 className="title my-6 text-center text-6xl font-bold leading-5">
            Jigsaw Puzzle
         </h1>

         <section>
            <form className="form flex flex-col items-center">
               <label htmlFor="text">Entre ton nom</label>
               <input
                  className="login-input w-64 m-5 p-4 text-center rounded"
                  type="text"
                  id="text"
                  value={inputValue}
                  onChange={(e) =>
                     setInputValue(e.target.value.toLowerCase().trim())
                  }
                  minLength={2}
                  maxLength={15}
                  placeholder="Saisir entre 2 et 15 caractères"
                  required
               />

               <Link
                  to="/user"
                  className="login-btn my-10 px-8 pt-4 pb-6 border-solid border-2 border-green-200 rounded-md text-white text-2xl font-bold bg-slate-600"
                  onClick={
                     inputValueLengthIsValid // Checks if the input is not empty
                        ? users.hasOwnProperty(inputValue) // Checks if the user already exists
                           ? handleLoginUser
                           : handleAddUser
                        : undefined
                  }
               >
                  Commencer
               </Link>
            </form>
         </section>
      </main>
   );
};

export default Login;
