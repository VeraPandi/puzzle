import { useState, useEffect } from "react";
import Title from "../components/Title";
import Gallery from "../components/images/Gallery";
import Loader from "../components/Loader";

const User = () => {
   const [loaderIsActive, setLoaderIsActive] = useState<boolean>(true);

   useEffect(() => {
      const timeout = setTimeout(() => {
         setLoaderIsActive(false);
      }, 1000);

      return () => clearTimeout(timeout);
   }, []);

   return (
      <main className="main flex flex-col justify-evenly p-10 maxTablet:h-full">
         <Title text="Catégories" />
         {loaderIsActive ? <Loader /> : <Gallery />}
      </main>
   );
};

export default User;
