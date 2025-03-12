import BackToHome from "../components/BackToHome";
import Password from "../components/forms/PasswordResetForm";

const PasswordReset = () => {
  return (
    <div className="page min-h-screen flex flex-col bg-beige-texture grayscale-[30%]">
      <main className="main grow flex flex-col justify-evenly desktop:rounded-medium">
        <BackToHome />
        <header className="flex flex-wrap justify-center items-baseline">
          <span className="py-4 px-5 text-7xl font-marker text-color-light-purple">
            Jigsaw
          </span>
          <span className="py-4 px-5 text-7xl font-marker text-color-light-red">
            Puzzle
          </span>
        </header>
        <Password />
      </main>
    </div>
  );
};

export default PasswordReset;
