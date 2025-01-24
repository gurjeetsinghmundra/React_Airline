import React from "react";

function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Airplane SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={styles.icon}
        >
          <path d="M21.5 10.9l-7.2-2.9-4-6.2a1.5 1.5 0 0 0-2.6 1.3l2.3 5.4-3.7-1.5-1.8-1.8a1 1 0 0 0-1.7.7v4.2l-1.6 1.4a1 1 0 0 0 0 1.6l1.6 1.4v4.2a1 1 0 0 0 1.7.7l1.8-1.8 3.7-1.5-2.3 5.4a1.5 1.5 0 0 0 2.6 1.3l4-6.2 7.2-2.9a1 1 0 0 0 0-1.8zM11 14l-7 3v-2l7-3 7 3v2l-7-3z" />
        </svg>

        {/* Message */}
        <h1 style={styles.heading}>404 - Page Not Found</h1>
        <p style={styles.message}>
          Oops! We can't seem to find the page you're looking for. It might have
          taken off or landed elsewhere.
        </p>
        <button style={styles.button} onClick={() => window.location.href = '/'}>
          Go Back Home
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    color: "#333",
    fontFamily: "'Arial', sans-serif",
  },
  content: {
    textAlign: "center",
  },
  icon: {
    width: "80px",
    height: "80px",
    color: "#007BFF", // Airline-themed blue
    marginBottom: "20px",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  message: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default NotFound;
