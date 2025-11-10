 import { Link, useLocation, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/Authprovider";
import { toast } from "react-toastify";

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
        toast.success("Successfully signed in!");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login failed!");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Google login successful!");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google login failed!");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 dark:bg-gray-900">
      <div className="card bg-base-100 dark:bg-gray-800 w-full max-w-sm shadow-2xl border border-gray-200 dark:border-gray-700">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-4 text-black dark:text-white">
            Login
          </h1>

          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
              <label className="label text-black dark:text-white">Email</label>
              <input
                type="email"
                name="email"
                className="input rounded-full focus:border-0 focus:outline-gray-400 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-300 bg-white dark:bg-gray-700"
                placeholder="Email"
              />

              <label className="label mt-2 text-black dark:text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="input rounded-full focus:border-0 focus:outline-gray-400 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-300 bg-white dark:bg-gray-700"
                placeholder="Password"
              />

              <div className="mt-1 text-right">
                <a className="link link-hover text-sm text-blue-500 dark:text-blue-400">
                  Forgot password?
                </a>
              </div>

              <button className="btn text-white mt-4 rounded-full bg-gradient-to-r from-pink-500 to-red-600 w-full">
                Login
              </button>
            </fieldset>
          </form>

          <div className="divider text-black dark:text-white">or</div>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white dark:bg-gray-700 rounded-full text-black dark:text-white border-[#e5e5e5] dark:border-gray-600 w-full flex items-center justify-center gap-2"
          >
            <FaGoogle /> Login with Google
          </button>

          <p className="text-center mt-3 text-black dark:text-white">
            New to our website?{" "}
            <Link
              className="text-blue-500 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium"
              to="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
