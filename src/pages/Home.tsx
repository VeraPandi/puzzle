import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";

const Home = () => {
  return (
    <div className="page min-h-screen flex flex-col bg-beige-texture grayscale-[30%]">
      <main className="main flex flex-col justify-evenly grow desktop:rounded-medium">
        <div className="go-to-registration absolute top-4 right-5 w-fit">
          <Link to="/registration">
            <span className="text-color-light-purple">S'inscrire</span>
          </Link>
        </div>

        <header className="flex flex-wrap justify-center items-baseline">
          <span className="py-4 px-5 text-7xl font-marker text-color-light-purple">
            Jigsaw
          </span>
          <span className="py-4 px-5 text-7xl font-marker text-color-light-red">
            Puzzle
          </span>
        </header>
        <LoginForm />
      </main>
    </div>
  );
};

export default Home;
