import { useEffect } from "react";
import { usePageStore } from "../stores/page";
import Settings from "./settings/Settings";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Menu = () => {
   const { menu, handleMenu, handleUnsubscribeMessage } = usePageStore();

   const toggleMenu = () => {
      handleMenu(!menu);
      handleUnsubscribeMessage(false);
   };

   useEffect(() => {
      handleMenu(false);
      handleUnsubscribeMessage(false);
   }, []);

   return !menu ? (
      <section className="menu-wrapper">
         <div className="menu float-right absolute right-10 bottom-0 top-10 z-10">
            <div className="menu-content absolute right-0 top-0 flex flex-col w-auto">
               <span className="menu-btns flex self-end w-fit">
                  <button
                     className="menu-btn black-btn flex justify-center items-center w-12 h-12 rounded-light text-color-white"
                     onClick={toggleMenu}
                  >
                     <HiOutlineMenu className="text-3xl" />
                  </button>
               </span>
            </div>
         </div>
      </section>
   ) : (
      <section className="menu-wrapper min-h-full absolute top-0 bottom-0 right-0 left-0 bg-[#f3f3f473]">
         <div className="menu absolute right-0 left-0 bottom-0 top-10 z-10 max-w-2xl w-10/12 m-auto">
            <div className="menu-content flex flex-col rounded-medium p-10 max-w-2xl m-auto border-[3px] border-color-black bg-beige-texture">
               <span className="menu-btns flex self-end w-fit">
                  <button className="menu-btn black-btn flex justify-center items-center w-12 h-12 rounded-light text-color-white">
                     <RxCross2 className="text-3xl" onClick={toggleMenu} />
                  </button>
               </span>
               <Settings />
            </div>
         </div>
      </section>
   );
};

export default Menu;
