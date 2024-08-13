import { useOutletContext } from "react-router-dom";

const About = () => {
  const data = useOutletContext();
  console.log(data);
  return <div>About</div>;
};

export default About;
