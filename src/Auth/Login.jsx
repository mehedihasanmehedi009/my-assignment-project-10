 import { Link, useLocation, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/Authprovider";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        event.target.reset();
        toast.success(" Successfully signed in!");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(" Login failed!");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success(" Google login successful!");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(" Google login failed!");
      });
  };

  return (
   
    <div>
 
        <div className="flex items-center justify-center min-h-screen bg-base-200">
     
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-gray-200">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-4">Login</h1>

          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Email"
              />

              <label className="label mt-2">Password</label>
              <input
                type="password"
                name="password"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Password"
              />
              <div className="mt-1">
                <a className="link link-hover text-sm">Forgot password?</a>
              </div>

              <button className="btn text-white mt-4 rounded-full bg-gradient-to-r from-pink-500 to-red-600">
                Login
              </button>
            </fieldset>
          </form>

          <div className="divider">or</div>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white rounded-full text-black border-[#e5e5e5]"
          >
            <FaGoogle />
            Login with Google
          </button>

          <p className="text-center mt-3">
            New to our website?{" "}
            <Link
              className="text-blue-500 hover:text-blue-800 font-medium"
              to="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Login;
