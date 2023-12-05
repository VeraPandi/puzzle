import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserStore } from "../stores/user";
import { usePageStore } from "../stores/page";
import { useGameStore } from "../stores/game";
import Title from "../components/Title";
import Tag from "../components/Tag";
import Loader from "../components/Loader";
import Levels from "../components/game/levels/Levels";
import Stars from "../components/game/levels/Stars";

const BoardImages = () => {
   const { category } = useParams();
   const { userData } = useUserStore();
   const { tag, handleLocation } = usePageStore();
   const { setCurrentImageData } = useGameStore();
   const [loaderIsActive, setLoaderIsActive] = useState<boolean>(true);

   useEffect(() => {
      const timeout = setTimeout(() => {
         setLoaderIsActive(false);
      }, 1000);

      if (category) handleLocation(category);

      return () => clearTimeout(timeout);
   }, [category, handleLocation]);

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
                     {userData !== undefined && category !== undefined ? (
                        userData.images[category].map(
                           (img: any, index: number) => (
                              <li
                                 className="image-content shelf-effect relative min-h-max m-4 p-1 rounded-medium"
                                 key={`${category}-img-${index}`}
                                 onClick={() => setCurrentImageData(img)}
                              >
                                 <img
                                    className="img h-48 w-64 rounded-[10px] border-[3px] border-color-white"
                                    src={img.urls.small}
                                    alt={img.alt_description || ""}
                                 />
                                 <Levels img={img} />
                                 <Stars img={img} />
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
