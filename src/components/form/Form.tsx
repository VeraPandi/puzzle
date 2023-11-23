import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImages, ImageCategoriesType } from "../../services/api";
import {
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword,
   User,
   updateProfile,
} from "firebase/auth";
import { ref, set } from "firebase/database";
import { database, auth } from "../../config/firebaseConfig";
import { createPuzzleCategories } from "./functions";

const Form = () => {
   const navigate = useNavigate();
   const [inputEmail, setInputEmail] = useState<string>("");
   const [inputName, setInputName] = useState<string>("");
   const [loaderIsActive, setLoaderIsActive] = useState<boolean>(false);
   const [progressBar, setProgressBar] = useState<number>(0);

   const handleForm = async (e: FormEvent) => {
      e.preventDefault();

      try {
         setLoaderIsActive(true);

         // Log in user
         await signInWithEmailAndPassword(auth, inputEmail, inputName);

         navigate("/user");
      } catch (error) {
         console.error(
            "ERROR. User authentication did not work properly : ",
            error
         );
      } finally {
         // Create user authentication in Firebase
         await createUserWithEmailAndPassword(auth, inputEmail, inputName);

         setProgressBar(5);

         // Gets the images and image categories to add to the user's profile
         const images = (await getImages()) as ImageCategoriesType;
         const puzzleCategories = createPuzzleCategories(images);

         setProgressBar(20);

         // Creates the user's profile in the database
         const user = auth.currentUser as User;
         await set(ref(database, "users/" + user.uid), {
            username: inputName,
            email: inputEmail,
            id: user.uid,
            images: images,
            games: { allCompleted: false, completedPuzzles: puzzleCategories },
         });

         setProgressBar(90);

         // Adds the user's name to his authentication data
         await updateProfile(user, {
            displayName: inputName,
         });

         setProgressBar(100);

         navigate("/user");
      }
   };

   return (
      <section className="form w-9/12 mx-auto my-20">
         <form
            className="form-content flex flex-col items-center"
            onSubmit={handleForm}
         >
            {/* Username */}
            <label htmlFor="username" className="text-xl">
               Entre ton pseudo
            </label>
            <input
               className="login-input w-72 m-5 mb-14 p-4 rounded-light text-base border-2"
               type="text"
               id="username"
               name="username"
               value={inputName}
               onChange={(e) =>
                  setInputName(e.target.value.toLowerCase().trim())
               }
               minLength={6}
               maxLength={25}
               placeholder="minimum 6 caractères"
               required
            />

            {/* Email */}
            <label htmlFor="email" className="text-xl">
               Entre ton email
            </label>
            <input
               className="login-input w-72 m-5 p-4 rounded-light text-base border-2"
               type="email"
               id="email"
               value={inputEmail}
               onChange={(e) =>
                  setInputEmail(e.target.value.toLowerCase().trim())
               }
               minLength={10}
               maxLength={40}
               required
            />

            {/* Button */}
            <button type="submit" className="submit-btn green-btn mt-14 mb-0">
               {!loaderIsActive ? (
                  <span>Commencer</span>
               ) : (
                  <span>
                     Chargement {progressBar >= 15 && `${progressBar}%`}
                  </span>
               )}
            </button>
         </form>
      </section>
   );
};

export default Form;
