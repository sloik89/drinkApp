import { useRouteError, Link, ErrorResponse } from "react-router-dom";
import img from "../error.svg";
const Error = () => {
  const err = useRouteError() as ErrorResponse;
  console.log(err);
  if (err.status === 404) {
    return (
      <div className="page err-page">
        <img className="err-img" src={img} alt="not found" />
        <h3>Ohh!</h3>
        <p>We can't seem to find page you are looking for</p>
        <Link to="/">Go back</Link>
      </div>
    );
  }

  return <div className="page err-page">Error</div>;
};

export default Error;
