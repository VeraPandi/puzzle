import React from "react";
import { useParams, Link } from "react-router-dom";
// import { ImageType } from "../service/api";
import { ImageType } from "../service/mocks/api";
import { useUserStore } from "../stores/user";

const Board = () => {
   const { category } = useParams();
   const { users } = useUserStore();

   const currentUser = useUserStore((state) => state.currentUser) as string; // Set expected type of "currentUser" for constant "images"
   const images = users[currentUser].images;

   return (
      <div>
         <h1 className="my-6 text-center text-3xl font-bold">
            Sélectionne une image
         </h1>

         <main className="flex flex-col items-center">
            <div>
               <ul className="images flex flex-wrap">
                  {images.map(
                     (array: any) =>
                        category !== undefined &&
                        array[category].map(
                           (element: ImageType, index: number) => (
                              <Link
                                 to="/game"
                                 className="link-to-game"
                                 key={`img-${index}`}
                              >
                                 <li
                                    className="image-content m-4"
                                    key={`${category}-img-${index}`}
                                 >
                                    <img
                                       className="img h-44 w-60"
                                       src={element.webformatURL}
                                       alt=""
                                    />
                                 </li>
                              </Link>
                           )
                        )
                  )}
               </ul>
            </div>

            <Link
               to="/user"
               className="back-btn my-10 px-20 pt-4 pb-6 border-solid border-2 border-green-200 rounded-md text-white text-2xl font-bold bg-slate-600"
            >
               Retour
            </Link>
         </main>
      </div>
   );
};

export default Board;
