import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        padding: 20,
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: 600,
          backgroundColor: "white",
          borderRadius: 10,
          padding: 40,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Error Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png"
          alt="Error"
          style={{
            width: 120,
            height: 120,
            marginBottom: 20,
            opacity: 0.8,
          }}
        />

        {/* Error Heading */}
        <h1 style={{ fontSize: 48, color: "#dc3545", marginBottom: 10 }}>
          Oops!
        </h1>

        {/* Error Message */}
        <h2 style={{ fontSize: 24, color: "#333", marginBottom: 15 }}>
          Something went wrong
        </h2>

        {/* Error Details */}
        <p style={{ fontSize: 16, color: "#666", marginBottom: 20, lineHeight: 1.6 }}>
          We're sorry, but the page you're looking for doesn't exist or something unexpected happened.
        </p>

        {/* Error Status/Message */}
        {error && (
          <div
            style={{
              backgroundColor: "#fff3cd",
              border: "1px solid #ffc107",
              borderRadius: 5,
              padding: 15,
              marginBottom: 20,
              textAlign: "left",
              fontSize: 14,
              color: "#856404",
            }}
          >
            <strong>Error Details:</strong>
            <p style={{ marginTop: 10, margin: 0 }}>
              {error?.status + " " + error?.statusText || error?.message || "Unknown error"}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 30 }}>
          <a
            href="/"
            style={{
              padding: "12px 24px",
              backgroundColor: "#007bff",
              color: "white",
              textDecoration: "none",
              borderRadius: 5,
              fontSize: 16,
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Go Home
          </a>
          <button
            onClick={() => window.history.back()}
            style={{
              padding: "12px 24px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: 5,
              fontSize: 16,
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#5a6268")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#6c757d")}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;