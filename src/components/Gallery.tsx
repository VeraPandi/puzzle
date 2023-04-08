import React from "react";
import { useUserStore } from "../stores/user";
import ImageCategory from "./ImageCategory";

const Gallery = () => {
   const { users } = useUserStore();
   const currentUser = useUserStore((state) => state.currentUser) as string; // Set expected type of "currentUser" for constant "images"
   const images = users[currentUser].images;

   return (
      <div className="gallery m-auto">
         {images.map((category) => (
            <ul
               key="categories"
               className="categories flex flex-wrap justify-around"
            >
               <li className="category m-2.5">
                  <ImageCategory
                     title="Animal"
                     category="animal"
                     array={category.animal.map((img) => img.webformatURL)}
                  />
               </li>

               <li className="category m-2.5">
                  <ImageCategory
                     title="Ville"
                     category="city"
                     array={category.city.map((img) => img.webformatURL)}
                  />
               </li>

               <li className="category m-2.5">
                  <ImageCategory
                     title="Monument"
                     category="monument"
                     array={category.monument.map((img) => img.webformatURL)}
                  />
               </li>

               <li className="category m-2.5">
                  <ImageCategory
                     title="Peinture à l'huile"
                     category="oilPainting"
                     array={category.oilPainting.map((img) => img.webformatURL)}
                  />
               </li>

               <li className="category m-2.5">
                  <ImageCategory
                     title="Illustration"
                     category="illustration"
                     array={category.illustration.map(
                        (img) => img.webformatURL
                     )}
                  />
               </li>

               <li className="category m-2.5">
                  <ImageCategory
                     title="Art de l'IA"
                     category="iaIllustration"
                     array={category.iaIllustration.map(
                        (img) => img.webformatURL
                     )}
                  />
               </li>

               <li className="category m-2.5">
                  <ImageCategory
                     title="Nature"
                     category="nature"
                     array={category.nature.map((img) => img.webformatURL)}
                  />
               </li>
            </ul>
         ))}
      </div>
   );
};

export default Gallery;
