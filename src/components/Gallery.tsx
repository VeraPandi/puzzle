import React from "react";
import { useUserStore } from "../stores/user";
import ImageCategory from "./ImageCategory";

const Gallery = () => {
   const { users } = useUserStore();
   const currentUser = useUserStore((state) => state.currentUser) as string; // Set expected type of "currentUser" for constant "images"
   const images = users[currentUser].images;

   return (
      <section className="gallery w-4/5 m-auto">
         <h1 className="my-6 text-center text-3xl font-bold">
            Choisis une catégorie
         </h1>

         {images.map((category) => (
            <div
               key="image-categories"
               className="categories flex flex-wrap justify-around"
            >
               <div className="m-2.5">
                  <ImageCategory
                     title="Animal"
                     category="animal"
                     array={category.animal.map((img) => img.webformatURL)}
                  />
               </div>

               <div className="m-2.5">
                  <ImageCategory
                     title="Ville"
                     category="city"
                     array={category.city.map((img) => img.webformatURL)}
                  />
               </div>

               <div className="m-2.5">
                  <ImageCategory
                     title="Monument"
                     category="monument"
                     array={category.monument.map((img) => img.webformatURL)}
                  />
               </div>

               <div className="m-2.5">
                  <ImageCategory
                     title="Peinture à l'huile"
                     category="oilPainting"
                     array={category.oilPainting.map((img) => img.webformatURL)}
                  />
               </div>

               <div className="m-2.5">
                  <ImageCategory
                     title="Illustration"
                     category="illustration"
                     array={category.illustration.map(
                        (img) => img.webformatURL
                     )}
                  />
               </div>

               <div className="m-2.5">
                  <ImageCategory
                     title="Art de l'IA"
                     category="iaIllustration"
                     array={category.iaIllustration.map(
                        (img) => img.webformatURL
                     )}
                  />
               </div>

               <div className="m-2.5">
                  <ImageCategory
                     title="Nature"
                     category="nature"
                     array={category.nature.map((img) => img.webformatURL)}
                  />
               </div>
            </div>
         ))}
      </section>
   );
};

export default Gallery;
