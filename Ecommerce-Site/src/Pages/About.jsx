import HeroSection from "../Components/HeroSection";
import { useProductContext } from "../context/productcontex";

const About = () => {
  // const myName = useContext(AppContext);
  const { myName } = useProductContext();
  // console.log(myName);

  const data = {
    name: "SK Ecommerce",
  };
  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
