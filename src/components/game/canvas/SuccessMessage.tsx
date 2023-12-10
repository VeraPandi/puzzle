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
         className="success-container animation-image absolute z-10 inset-x-0 bottom-[60%] h-48 w-max m-auto p-5 border-[3px] border-color-white rounded-medium text-lg text-center text-color-white bg-color-black desktop:w-4/12 largeDesktop:text-2xl"
         onClick={toggleMessage}
      >
         <button className="success-btn absolute top-2.5 right-2.5 flex justify-center items-center w-auto h-auto p-2 rounded-light">
            <RxCross2 className="success-icon text-2xl desktop:text-3xl" />
         </button>
         <div className="success-container flex flex-col justify-center h-full w-full m-auto">
            <span className="success-text pb-2">Bravo ! </span>
            <span className="success-text">Le puzzle est réussi !</span>
         </div>
      </div>
   );
};

export default SuccessMessage;
