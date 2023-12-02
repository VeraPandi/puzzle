import React from "react";
import { ImageType } from "../../services/api";
import { useUserStore } from "../../stores/user";
import ImageCategory from "./ImageCategory";

const Gallery = () => {
   const { userData } = useUserStore();

   return (
      <section className="gallery flex flex-col items-center justify-center desktop:m-auto">
         <div className="gallery-content m-auto">
            {userData !== undefined && (
               <ul
                  key="categories"
                  className="categories animation-image flex flex-wrap justify-around max-w-[1180px]"
               >
                  <li className="category m-3 p-2">
                     <ImageCategory
                        title="Animal"
                        category="animal"
                        array={userData.images.animal.map(
                           (img: ImageType) => img.urls.small
                        )}
                     />
                  </li>

                  <li className="category m-3 p-2">
                     <ImageCategory
                        title="Paysage"
                        category="landscape"
                        array={userData.images.landscape.map(
                           (img: ImageType) => img.urls.small
                        )}
                     />
                  </li>

                  <li className="category m-3 p-2">
                     <ImageCategory
                        title="Peinture"
                        category="painting"
                        array={userData.images.painting.map(
                           (img: ImageType) => img.urls.small
                        )}
                     />
                  </li>

                  <li className="category m-3 p-2">
                     <ImageCategory
                        title="Art digital"
                        category="digitalArt"
                        array={userData.images.digitalArt.map(
                           (img: ImageType) => img.urls.small
                        )}
                     />
                  </li>

                  <li className="category m-3 p-2">
                     <ImageCategory
                        title="Graffiti"
                        category="graffiti"
                        array={userData.images.graffiti.map(
                           (img: ImageType) => img.urls.small
                        )}
                     />
                  </li>

                  <li className="category m-3 p-2">
                     <ImageCategory
                        title="Nature"
                        category="nature"
                        array={userData.images.nature.map(
                           (img: ImageType) => img.urls.small
                        )}
                     />
                  </li>
               </ul>
            )}
         </div>
      </section>
   );
};

export default Gallery;
