import React from "react";
import { Link } from "react-router-dom";

interface ImageCategoryProps {
   title: string;
   category: string;
   array: string[];
}

const ImageCategory = ({ title, category, array }: ImageCategoryProps) => {
   return (
      <>
         <h2 className="category-title p-2 text-center">{title}</h2>

         <Link to={`/images/${category}`} className="link-to-board-images">
            <img className="h-40 w-56 border-2" src={array[0]} alt="" />
         </Link>
      </>
   );
};

export default ImageCategory;
