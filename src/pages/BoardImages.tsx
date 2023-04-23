import React from "react";
import { useParams, Link } from "react-router-dom";
import { ImageType } from "../service/api";
import { useUserStore } from "../stores/user";
import { usePageStore } from "../stores/page";
import Title from "../components/Title";
import Tag from "../components/Tag";

const BoardImages = () => {
   const { category } = useParams();
   const { users } = useUserStore();

   const currentUser = useUserStore((state) => state.currentUser) as string; // Set expected type of "currentUser" for constant "images"
   const images = users[currentUser].images;

   const tag = usePageStore((state) => state.tag);

   return (
      <main className="main items-center">
         <header className="titles">
            <Title text="Sélectionne une image" />

            {typeof tag === "string" && (
               <Tag
                  text={tag}
                  styles="flex justify-center mt-[-20px] text-lg text-color-dark-gray"
               />
            )}
         </header>

         <section className="images flex flex-col items-center justify-center desktop:m-auto">
            <div className="images-content m-auto mt-10">
               <ul className="images-list flex flex-wrap justify-evenly max-w-[1290px]">
                  {images.map(
                     (array: any) =>
                        category !== undefined &&
                        array[category].map(
                           (element: ImageType, index: number) => (
                              <li
                                 className="image-content m-4 p-1 rounded-medium push-effect active:bg-color-white"
                                 key={`${category}-img-${index}`}
                              >
                                 <Link
                                    to="/board-game"
                                    className="link-to-board-game"
                                    key={`img-${index}`}
                                 >
                                    <img
                                       className="img h-48 w-64 rounded-medium border-[3px] border-color-white"
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
         </section>
      </main>
   );
};

export default BoardImages;
