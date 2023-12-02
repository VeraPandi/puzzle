import React from "react";
import { Link } from "react-router-dom";
import { usePageStore } from "../../stores/page";

export interface ImageCategoryProps {
   title: string;
   category: string;
   array: string[];
}

const ImageCategory = ({ title, category, array }: ImageCategoryProps) => {
   const { handleTag } = usePageStore();

   return (
      <>
         <h2 className="category-title w-auto p-3 text-center text-lg text-color-dark-gray">
            {title}
         </h2>

         <div className="category-image flex h-48 w-64 rounded-medium shadow-light push-effect">
            <Link
               to={`/images/${category}`}
               className="link-to-board-images"
               onClick={() => handleTag(title)}
            >
               <img
                  className="h-40 w-56 m-4 rounded-medium border-[3px] border-color-white"
                  src={array[0]}
                  alt=""
               />
            </Link>
         </div>
      </>
   );
};

export default ImageCategory;
