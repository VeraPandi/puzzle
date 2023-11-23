import { useState } from "react";
import { useGameStore } from "../../../stores/game";
import { RxCross2 } from "react-icons/rx";

const SuccessMessage = () => {
   const { successMessage, setSuccessMessage } = useGameStore();
   const [messageIsActive, setMessageIsActive] = useState<boolean>(false);

   const toggleMessage = () => {
      setSuccessMessage(!successMessage);
   };

   setTimeout(() => {
      setMessageIsActive(true);
   }, 500);

   return (
      <div
         className="success-container animation-image h-40 w-4/12 absolute inset-y-0 inset-x-0 z-10 m-auto rounded-light border-[3px] border-color-white bg-color-black text-color-white text-center text-2xl"
         onClick={toggleMessage}
      >
         <RxCross2 className="relative float-right top-[5%] right-[8px] text-3xl" />
         <span className="success-text block mt-11">Bravo ! </span>
         <span className="success-text mb-11">
            Vous avez réussi le puzzle !
         </span>
      </div>
   );
};

export default SuccessMessage;
