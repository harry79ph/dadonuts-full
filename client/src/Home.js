import { lazy, Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import Hero from "./components/Hero";
import { Loader } from "./components/styles/Products.styled";
import CopyRight from "./components/CopyRight";

const HomeContent = lazy(() => import("./components/HomeContent"));

function Home({ animation }) {

  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <>
      <Navbar handleToggle={handleToggle} />
      <SideMenu isOpen={isOpen} handleToggle={handleToggle} />
      <Hero animation={animation} />
      <Suspense fallback={<Loader>Please wait. Loading...</Loader>}>
        <HomeContent />
      </Suspense>
      <CopyRight />
    </>
  );
}

export default Home;
