// import { useRouteError } from "react-router-dom";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-errorImage w-full h-[100vh] flex items-center justify-center bg-contain">
      <div className=" flex flex-col justify-center w-60 h-56 items-center shadow-2xl ">
        <Link to="/">
          <button className="bg-backColor p-2 rounded-xl m-2 hover:bg-cyan-600">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
