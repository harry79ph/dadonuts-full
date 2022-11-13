import { lazy, Suspense } from "react";
import Products from "./Products";
import { Loader } from "./styles/Products.styled";

const Features = lazy(() => import("./Features"));

const HomeContent = () => {
  return (
    <>
      <Products />
      <Suspense fallback={<Loader>Please wait. Loading...</Loader>}>
        <Features />
      </Suspense>
    </>
  );
};

export default HomeContent;
