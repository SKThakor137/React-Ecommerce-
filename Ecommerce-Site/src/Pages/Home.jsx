import HeroSection from "../Components/HeroSection";
import Services from "../Components/Services";
import Trusted from "../Components/Trusted";
import FeatureProduct from "../Components/FeatureProduct";

const Home = () => {
  const data = {
    name: "SK Store",
    about: `Welcome to our SK eCommerce site! Our app offers an intuitive
    shopping experience with features like product filtering by price
    and category, a powerful search tool for quickly finding specific
    items, and a convenient shopping cart for easy product management
    and checkout.`,
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
