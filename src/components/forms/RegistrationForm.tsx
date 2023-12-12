import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImages } from "../../services/api";
import {
   createUserWithEmailAndPassword,
   User,
   updateProfile,
} from "firebase/auth";
import { ref, set } from "firebase/database";
import { database, auth } from "../../config/firebaseConfig";
import { createPuzzleCategories } from "./functions";
import { validationErrors } from "./validations";
import { ImageCategoriesType } from "../../types";

const RegistrationForm = () => {
   const navigate = useNavigate();
   const [name, setName] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [password, setPassword] = useState<string>("");
   const [validation, setValidation] = useState<string>("");
   const [loaderIsActive, setLoaderIsActive] = useState<boolean>(false);
   const [progressBar, setProgressBar] = useState<number>(0);

   const handleRegistration = async (e: FormEvent) => {
      e.preventDefault();

      try {
         setLoaderIsActive(true);

         setProgressBar(5);

         // Create user authentication
         await createUserWithEmailAndPassword(auth, email, password);

         // Adds the user's name to his authentication data
         const user = auth.currentUser as User;
         await updateProfile(user, {
            displayName: name,
         });

         // Gets the images and game categories to add to the user's profile
         const images = (await getImages()) as ImageCategoriesType;
         const puzzleCategories = createPuzzleCategories(images);

         setProgressBar(20);

         // Creates the user's profile in the database
         await set(ref(database, "users/" + user.uid), {
            username: name,
            email: email,
            images: images,
            games: { allCompleted: false, completedPuzzles: puzzleCategories },
         });

         setProgressBar(100);

         navigate("/user");
      } catch (error) {
         setValidation(validationErrors(error));
      }
   };

   return (
      <section className="registration-form w-9/12 mx-auto">
         <h2 className="mt-10 mb-16 mx-auto text-2xl text-center">
            Créer un compte
         </h2>

         <form
            className="form-content flex flex-col items-center"
            onSubmit={handleRegistration}
         >
            {/* Username */}
            <div className="field flex flex-col items-center">
               <label htmlFor="username" className="text-xl">
                  Pseudo
               </label>
               <input
                  className="username-input w-72 mt-3 mb-11 p-4 border-2 rounded-light text-base desktop:mb-9"
                  type="text"
                  id="username"
                  name="username"
                  value={name}
                  onChange={(e) => setName(e.target.value.toLowerCase().trim())}
                  minLength={2}
                  maxLength={20}
                  required
               />
            </div>

            {/* Email */}
            <div className="field flex flex-col items-center">
               <label htmlFor="email" className="text-xl">
                  Email
               </label>
               <input
                  className="email-input w-72 mt-3 mb-11 p-4 border-2 rounded-light text-base desktop:mb-9"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) =>
                     setEmail(e.target.value.toLowerCase().trim())
                  }
                  minLength={10}
                  maxLength={40}
                  required
               />
            </div>

            {/* Password */}
            <div className="field flex flex-col items-center">
               <label htmlFor="password" className="text-xl">
                  Mot de passe
               </label>
               <input
                  className="password-input w-72 mt-3 mb-1 p-4 border-2 rounded-light text-base desktop:mb-1"
                  type="text"
                  id="password"
                  value={password}
                  onChange={(e) =>
                     setPassword(e.target.value.toLowerCase().trim())
                  }
                  minLength={6}
                  maxLength={15}
                  placeholder="minimum 6 caractères"
                  required
               />
            </div>

            {/* Validation */}
            <span className="validation mt-9 text-xl text-color-light-red">
               {validation}
            </span>

            {/* Button */}
            <button
               type="submit"
               className="submit-btn green-btn mt-9 mb-0 desktop:mt-9 desktop:mb-10"
            >
               {!loaderIsActive ? (
                  <span>Commencer</span>
               ) : !validation ? (
                  <span>
                     Chargement {progressBar >= 15 && `${progressBar}%`}
                  </span>
               ) : (
                  <span>commencer</span>
               )}
            </button>
         </form>
      </section>
   );
};

export default RegistrationForm;
