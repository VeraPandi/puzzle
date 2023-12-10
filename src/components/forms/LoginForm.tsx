import { FormEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

const LoginForm = () => {
   const navigate = useNavigate();
   const [inputEmail, setInputEmail] = useState<string>("");
   const [inputPassword, setInputPassword] = useState<string>("");
   const [validation, setValidation] = useState<string>("");
   const [loaderIsActive, setLoaderIsActive] = useState<boolean>(false);
   const [progressBar, setProgressBar] = useState<number>(0);

   const handleLogin = async (e: FormEvent) => {
      e.preventDefault();

      try {
         setLoaderIsActive(true);
         setValidation("");

         setProgressBar(5);

         // Log in user
         await signInWithEmailAndPassword(auth, inputEmail, inputPassword);

         setProgressBar(100);

         navigate("/user");
      } catch (error) {
         console.error("ERROR. User login did not work correctly : ", error);
         setValidation("Oups ! L'email et/ou le mot de passe est incorrect");
      }
   };

   return (
      <section className="login-form w-9/12 mx-auto">
         <form
            className="form-content flex flex-col items-center"
            onSubmit={handleLogin}
         >
            {/* Email */}
            <div className="field flex flex-col items-center">
               <label htmlFor="email" className="text-xl">
                  Email
               </label>
               <input
                  className="email-input w-72 mt-3 mb-1 p-4 border-2 rounded-light text-base"
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
            </div>

            {/* Redirect to registration */}
            <div className="go-to-registration">
               <span>Nouveau joueur ?</span>
               <Link to="/registration">
                  <span className="text-color-light-purple"> Commence ici</span>
               </Link>
            </div>

            {/* Password */}
            <div className="field flex flex-col items-center mt-10">
               <label htmlFor="password" className="text-xl">
                  Mot de passe
               </label>
               <input
                  className="password-input w-72 mt-3 mb-6 p-4 border-2 rounded-light text-base desktop:mb-9"
                  type="text"
                  id="password"
                  value={inputPassword}
                  onChange={(e) =>
                     setInputPassword(e.target.value.toLowerCase().trim())
                  }
                  minLength={5}
                  maxLength={15}
                  required
               />
            </div>

            {/* Validation */}
            <span className="validation text-xl text-color-light-red">
               {validation}
            </span>

            {/* Button */}
            <button
               type="submit"
               className="submit-btn green-btn mt-14 mb-0 desktop:mt-10 desktop:mb-10"
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

export default LoginForm;
