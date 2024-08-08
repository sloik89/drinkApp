import {
  useRouteError,
  isRouteErrorResponse,
  type ErrorResponse,
} from "react-router-dom";
const SinglePageError = () => {
  const err = useRouteError() as Error & ErrorResponse;
  console.log(isRouteErrorResponse(err));

  return (
    <div className="page err-page">
      <h1>{err.message}</h1>
    </div>
  );
};

export default SinglePageError;
