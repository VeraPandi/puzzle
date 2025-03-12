import { useEffect, useState } from "react";
import Gallery from "../components/images/Gallery";
import Loader from "../components/Loader";
import Title from "../components/Title";

const User = () => {
  const [loaderIsActive, setLoaderIsActive] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaderIsActive(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="main flex flex-col justify-evenly grow">
      <Title text="Catégories" />
      {loaderIsActive ? <Loader /> : <Gallery />}
    </main>
  );
};

export default User;
