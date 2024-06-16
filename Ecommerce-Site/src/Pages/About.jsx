import HeroSection from "../Components/HeroSection";
import { useProductContext } from "../context/productcontex";

const About = () => {
  // const myName = useContext(AppContext);
  // const { myName } = useProductContext();
  // console.log(myName);

  const data = {
    name: "SK Ecommerce",
    about: ` Welcome to our React-powered eCommerce site! Enjoy seamless browsing with robust state management using useReducer and useContext hooks, secure Auth0 login, and a sleek design with Styled Components. Easily filter products by price and name, search efficiently, and manage your cart effortlessly,`,
  };
  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
