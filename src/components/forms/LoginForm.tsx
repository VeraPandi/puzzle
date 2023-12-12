import { FormEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { validationErrors } from "./validations";

const LoginForm = () => {
   const navigate = useNavigate();
   const [email, setEmail] = useState<string>("");
   const [password, setPassword] = useState<string>("");
   const [validation, setValidation] = useState<string>("");
   const [loaderIsActive, setLoaderIsActive] = useState<boolean>(false);
   const [progressBar, setProgressBar] = useState<number>(0);

   const handleLogin = async (e: FormEvent) => {
      e.preventDefault();

      try {
         setLoaderIsActive(true);
         setProgressBar(5);

         await signInWithEmailAndPassword(auth, email, password);
         setProgressBar(100);

         navigate("/user");
      } catch (error) {
         setValidation(validationErrors(error));
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
            <div className="field flex flex-col items-center mt-10">
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
                  minLength={5}
                  maxLength={15}
                  required
               />
            </div>

            {/* Redirect to password reset */}
            <div className="go-to-password-reset">
               <Link to="/resetPassword">
                  <span className="text-color-light-purple">
                     Mot de passe oublié ?
                  </span>
               </Link>
            </div>

            {/* Validation */}
            <span className="validation text-xl text-color-light-red mt-9">
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

export default LoginForm;
