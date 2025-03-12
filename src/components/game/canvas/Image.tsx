import { useEffect } from "react";
import { FaImage } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useGameStore } from "../../../stores/game";
import { usePageStore } from "../../../stores/page";

const Image = () => {
  const { currentImageData } = useGameStore();
  const imageUrl = currentImageData?.urls.regular as string;
  const { image, handleImage } = usePageStore();

  const toggleView = () => {
    handleImage(!image);
  };

  useEffect(() => {
    handleImage(false);
  }, []);

  return !image ? (
    <span className="view-items flex absolute right-2/4 mr-[-38px]">
      <button className="view-btn black-btn flex justify-center items-center w-12 h-12 rounded-light text-color-white">
        <FaImage className="view-icon text-3xl" onClick={toggleView} />
      </button>
    </span>
  ) : (
    <section className="view-wrapper min-h-full absolute bottom-1/3 inset-x-0">
      <div className="view-container absolute z-10 inset-x-0 top-[36%] right-[-31px] left-[0] w-[45%] h-[auto] max-w-[500px] max-h-[300px] m-auto">
        <div className="view-content flex flex-col rounded-medium border-[3px] border-color-white">
          <span className="view-items flex self-end">
            <button className="view-btn absolute top-2.5 right-2.5 flex justify-center items-center w-auto h-auto m-2.5 rounded-light border-[3px] border-color-white text-color-white bg-color-black">
              <RxCross2
                className="view-icon text-2xl desktop:text-3xl"
                onClick={toggleView}
              />
            </button>
          </span>
          <img className="img rounded-medium" src={imageUrl} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Image;
