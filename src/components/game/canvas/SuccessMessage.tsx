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
         className="success-container animation-image absolute z-10 inset-x-0 bottom-[60%] h-48 w-5/12 p-5 m-auto border-[3px] border-color-white rounded-light text-lg text-center text-color-white bg-color-black desktop:text-2xl"
         onClick={toggleMessage}
      >
         <RxCross2 className="relative float-right w-8 top-[-11px] right-[-11px] text-3xl" />
         <div className="success-container flex flex-col h-full w-full m-auto">
            <span className="success-text pb-2">Bravo ! </span>
            <span className="success-text">Vous avez réussi le puzzle !</span>
         </div>
      </div>
   );
};

export default SuccessMessage;
