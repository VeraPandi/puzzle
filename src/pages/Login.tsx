import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createImageSlice } from "../service/api";
import { useUserStore } from "../stores/user";
import Title from "../components/Title";

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

            <section className="form w-9/12 mx-auto my-20">
               <form className="form-content flex flex-col items-center">
                  <label htmlFor="text" className="text-xl">
                     Entre ton nom
                  </label>
                  <input
                     className="login-input w-72 m-5 p-4 rounded-light text-base border-2"
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
                     className="green-btn"
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
      </div>
   );
};

export default Login;
