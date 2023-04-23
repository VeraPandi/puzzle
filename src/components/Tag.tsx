import React from "react";

interface TagProps {
   text: string;
   styles?: string;
}

const Tag = ({ text, styles }: TagProps) => {
   return <span className={`tag ${styles}`}>Catégorie : {text}</span>;
};

export default Tag;
