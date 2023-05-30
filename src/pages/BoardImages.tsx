import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ImageType } from "../services/api";
import { useUserStore } from "../stores/user";
import { usePageStore } from "../stores/page";
import Title from "../components/Title";
import Tag from "../components/Tag";
import Loader from "../components/Loader";

const BoardImages = () => {
   const { category } = useParams();
   const { userData } = useUserStore();
   const tag = usePageStore((state) => state.tag);
   const [loaderIsActive, setLoaderIsActive] = useState<boolean>(true);

   useEffect(() => {
      setTimeout(() => {
         setLoaderIsActive(false);
      }, 1000);
   }, []);

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
            {loaderIsActive ? (
               <Loader />
            ) : (
               <div className="images-content m-auto mt-10">
                  <ul className="images-list animation-image flex flex-wrap justify-evenly max-w-[1290px]">
                     {userData !== null && category !== undefined ? (
                        userData.images[category].map(
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
                                       src={element.urls.small}
                                       alt=""
                                    />
                                 </Link>
                              </li>
                           )
                        )
                     ) : (
                        <span className="loader-text">Chargement ...</span>
                     )}
                  </ul>
               </div>
            )}
         </section>
      </main>
   );
};

export default BoardImages;
