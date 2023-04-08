import React from "react";
import { useParams, Link } from "react-router-dom";
import { ImageType } from "../service/api";
import { useUserStore } from "../stores/user";
import Title from "../components/Title";

const BoardImages = () => {
   const { category } = useParams();
   const { users } = useUserStore();

   const currentUser = useUserStore((state) => state.currentUser) as string; // Set expected type of "currentUser" for constant "images"
   const images = users[currentUser].images;

   return (
      <main className="main bg-stone-400">
         <Title text="Sélectionne une image" styles="" />

         <div className="images items-center justify-center text-slate-50">
            <ul className="images-list flex flex-wrap justify-around">
               {images.map(
                  (array: any) =>
                     category !== undefined &&
                     array[category].map(
                        (element: ImageType, index: number) => (
                           <li
                              className="image-content m-4"
                              key={`${category}-img-${index}`}
                           >
                              <Link
                                 to="/board-game"
                                 className="link-to-board-game"
                                 key={`img-${index}`}
                              >
                                 <img
                                    className="img h-44 w-60"
                                    src={element.webformatURL}
                                    alt=""
                                 />
                              </Link>
                           </li>
                        )
                     )
               )}
            </ul>
         </div>
      </main>
   );
};

export default BoardImages;
