/* Importing the css file and the Link component from react-router-dom */
import "./Login.css";
import { Link } from "react-router-dom";

/**
 * The Login function returns a React fragment that contains a link to the Home page and a link to the
 * New Home page
 * @returns The return statement is returning a React element.
 */
const Login = () => {
  return (
    <>
      This is the Login
      <Link to="/">Home</Link>
      <Link to="/">New Home</Link>
    </>
  );
};

export default Login;
