import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();

  function handleGoHome() {
    navigate("/");
  }

  return (
    <p className="mt-4 text-center text-white">
      404 Page not found. Click here to go to{" "}
      <span
        className="cursor-pointer font-semibold italic underline"
        onClick={handleGoHome}
      >
        home
      </span>
      .
    </p>
  );
};

export { PageNotFound };
