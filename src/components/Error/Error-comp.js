import { useRouteError } from "react-router-dom";
import "./Error-comp.css";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="error-container">
      <div className="error-box">
        {/* Error Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png"
          alt="Error"
          className="error-image"
        />

        {/* Error Heading */}
        <h1>Oops!</h1>

        {/* Error Message */}
        <h2>Something went wrong</h2>

        {/* Error Details */}
        <p>
          We're sorry, but the page you're looking for doesn't exist or
          something unexpected happened.
        </p>

        {/* Error Status/Message */}
        {error && (
          <div className="error-details">
            <strong>Error Details:</strong>
            <p>{error?.statusText || error?.message || "Unknown error"}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="error-actions">
          <a href="/">Go Home</a>
          <button onClick={() => window.history.back()}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default Error;