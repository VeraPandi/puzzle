import React from "react";
import { useUserStore } from "../stores/user";
import ImageCategory from "./ImageCategory";

const Gallery = () => {
   const { users } = useUserStore();
   const currentUser = useUserStore((state) => state.currentUser) as string; // Set expected type of "currentUser" for constant "images"
   const images = users[currentUser].images;

   return (
      <section className="gallery flex flex-col items-center justify-center desktop:m-auto">
         <div className="gallery-content m-auto">
            {images.map((category) => (
               <ul
                  key="categories"
                  className="categories flex flex-wrap justify-around max-w-[1180px]"
               >
                  <li className="category m-3 p-2">
                     <ImageCategory
                        title="Animal"
                        category="animal"
                        array={category.animal.map((img) => img.webformatURL)}
                     />
                  </li>

                  <li className="category m-3 p-2">
                     <ImageCategory
                        title="Ville"
                        category="city"
                        array={category.city.map((img) => img.webformatURL)}
                     />
                  </li>

                  <li className="category m-3 p-2">
                     <ImageCategory
                        title="Peinture à l'huile"
                        category="oilPainting"
                        array={category.oilPainting.map(
                           (img) => img.webformatURL
                        )}
                     />
                  </li>

                  <li className="category m-3 p-2">
                     <ImageCategory
                        title="Illustration"
                        category="illustration"
                        array={category.illustration.map(
                           (img) => img.webformatURL
                        )}
                     />
                  </li>

                  <li className="category m-3 p-2">
                     <ImageCategory
                        title="Art de l'IA"
                        category="iaIllustration"
                        array={category.iaIllustration.map(
                           (img) => img.webformatURL
                        )}
                     />
                  </li>

                  <li className="category m-3 p-2">
                     <ImageCategory
                        title="Nature"
                        category="nature"
                        array={category.nature.map((img) => img.webformatURL)}
                     />
                  </li>
               </ul>
            ))}
         </div>
      </section>
   );
};

export default Gallery;
