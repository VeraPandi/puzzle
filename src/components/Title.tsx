import React from "react";

interface TitleProps {
   text: string;
   styles?: string;
}

const Title = ({ text, styles }: TitleProps) => {
   return (
      <h1
         className={`title m-0 pb-10 font-marker text-center text-3xl font-bold tracking-wide leading-snug ${styles}`}
      >
         {text}
      </h1>
   );
};

export default Title;
