import React from "react";
import { useUserStore } from "../stores/user";
import Title from "../components/Title";
import Gallery from "../components/Gallery";

const User = () => {
   const currentUser = useUserStore((state) => state.currentUser) as string;

   return (
      <main className="main items-center bg-stone-400">
         <span className="welcome-name absolute top-7 left-10">{`Bienvenue, ${currentUser} !`}</span>
         <Title text="Choisis une catégorie" styles="" />
         <section className="flex flex-col items-center justify-center text-slate-50">
            <Gallery />
         </section>
      </main>
   );
};

export default User;
