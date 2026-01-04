import { Link } from 'react-router-dom';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  textAlign: 'center',
  backgroundColor: '#f8f9fa',
  color: '#343a40',
  fontFamily: 'Arial, sans-serif',
};

const headingStyle: React.CSSProperties = {
  fontSize: '6em',
  margin: '0',
  color: '#dc3545',
};

const subheadingStyle: React.CSSProperties = {
  fontSize: '2em',
  margin: '0.5em 0',
};

const textStyle: React.CSSProperties = {
  fontSize: '1.2em',
  marginBottom: '1.5em',
  maxWidth: '600px',
  padding: '0 1em',
};

const linkStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '0.8em 1.5em',
  backgroundColor: '#007bff',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
};

const NotFoundPage = () => {
  return (
    <main style={containerStyle}>
      <h1 style={headingStyle}>404</h1>
      <h2 style={subheadingStyle}>Page Not Found</h2>
      <p style={textStyle}>
        Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or never existed.
      </p>
      <Link to="/" style={linkStyle} onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#0069d9";
      }} onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "#007bff";
      }}>
        Return to Home
      </Link>
    </main>
  );
};

export default NotFoundPage;
