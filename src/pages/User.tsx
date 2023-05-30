import { useState, useEffect } from "react";
import Title from "../components/Title";
import Gallery from "../components/Gallery";
import Loader from "../components/Loader";

const User = () => {
   const [loaderIsActive, setLoaderIsActive] = useState<boolean>(true);

   useEffect(() => {
      setTimeout(() => {
         setLoaderIsActive(false);
      }, 1000);
   }, []);

   return (
      <main className="main items-center p-10">
         <Title text="Catégories" />
         {loaderIsActive ? <Loader /> : <Gallery />}
      </main>
   );
};

export default User;
