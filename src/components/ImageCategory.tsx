import React from "react";
import { Link } from "react-router-dom";

interface ImageCategoryProps {
   title: string;
   category: string;
   array: string[];
}

const ImageCategory = ({ title, category, array }: ImageCategoryProps) => {
   return (
      <div className="category">
         <h2 className="category-title p-2 text-center">{title}</h2>

         <ul className="category-images w-40 border-2">
            <li key={`category-${category}`}>
               <Link to={`/board/${category}`} className="link-to-board">
                  <img className="w-full" src={array[0]} alt="" />
               </Link>
            </li>
         </ul>
      </div>
   );
};

export default ImageCategory;
