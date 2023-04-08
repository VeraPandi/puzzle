import React from "react";

interface TitleProps {
   text: string;
   styles: string;
}

const Title = ({ text, styles }: TitleProps) => {
   return (
      <h1
         className={`title m-0 p-6 text-center text-3xl font-bold leading-5${styles}`}
      >
         {text}
      </h1>
   );
};

export default Title;
