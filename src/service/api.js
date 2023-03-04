import { useEffect, useState } from "react";

export const useImages = () => {
   const [animals, setAnimals] = useState([]);

   const fetchAnimals = async () => {
      const apiURL = "/.netlify/functions/getImages?keyword=animal";
      const response = await fetch(apiURL);
      const data = await response.json();
      setAnimals(data.imageURL);
   };

   useEffect(() => {
      fetchAnimals();
   }, []);

   return { animals };
};
