export const validationErrors = (error: any) => {
   if (error.code === "auth/invalid-login-credentials") {
      console.error("ERROR. User login did not work correctly : ", error.code);
      const message: string =
         "Oups ! L'email et/ou le mot de passe est incorrect";
      return message;
   }

   if (error.code === "auth/email-already-in-use") {
      console.error(
         "ERROR. User registration did not work correctly : ",
         error.code
      );
      const message: any = "Oups ! Le compte a déjà été créé";
      return message;
   }
};
