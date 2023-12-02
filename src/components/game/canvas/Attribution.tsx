import React from "react";
import { ImageType } from "../../../services/api";
import { useGameStore } from "../../../stores/game";

const Attribution = () => {
   const photo = useGameStore((state) => state.currentImageData) as ImageType;

   return (
      <section className="attribution flex">
         {photo && (
            <div className="attribution-items p-3 py-5 text-sm text-center italic text-color-black">
               <span className="mr-1">Photo de</span>
               <a
                  className="border-b-2 border-color-dark-gray hover:border-0"
                  href={`${photo.user.links.html}?utm_source=vp-jigsaw-puzzle&utm_medium=referral`}
                  target="_blank"
               >
                  {photo.user.name}
               </a>
               <span className="mx-1">publiée sur</span>
               <a
                  className="border-b-2 border-color-dark-gray hover:border-0"
                  href="https://unsplash.com/?utm_source=vp-jigsaw-puzzle&utm_medium=referral"
                  target="_blank"
               >
                  Unsplash
               </a>
            </div>
         )}
      </section>
   );
};

export default Attribution;
