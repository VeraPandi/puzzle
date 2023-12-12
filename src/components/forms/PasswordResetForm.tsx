import { FormEvent, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

const PasswordResetForm = () => {
   const [email, setEmail] = useState<string>("");
   const [validation, setValidation] = useState<boolean>(false);

   const handlePasswordReset = async (e: FormEvent) => {
      e.preventDefault();

      try {
         await sendPasswordResetEmail(auth, email);
         setValidation(true);
      } catch (error) {
         console.error(
            "ERROR. User password reset did not work properly : ",
            error
         );
      }
   };

   return (
      <section className="login-form w-9/12 mx-auto">
         <h2 className="mt-10 mb-16 mx-auto text-2xl text-center">
            Réinitialisation de mot de passe
         </h2>
         <form
            className="form-content flex flex-col items-center"
            onSubmit={handlePasswordReset}
         >
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

            {/* Validation */}
            {validation && (
               <span className="validation text-xl text-color-light-red">
                  Email envoyé !
               </span>
            )}

            {/* Button */}
            <button
               type="submit"
               className="submit-btn green-btn mt-8 mb-0 desktop:mt-10 desktop:mb-10"
            >
               Envoyer
            </button>
         </form>
      </section>
   );
};

export default PasswordResetForm;
