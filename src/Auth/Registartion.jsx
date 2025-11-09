 import { Link, useNavigate } from "react-router";  
import { FaGoogle } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../context/Authprovider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Register = () => {
  const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    toast.loading("Creating user...", { id: "create-user" });

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(displayName, photoURL);
        toast.success("User created successfully!", { id: "create-user" });
        event.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message, { id: "create-user" });
      });
  };

  const handleGoogleSignIn = () => {
    toast.loading("Creating user...", );
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("User created successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message, { id: "create-user" });
      });
  };

  return (
  <div>
    <Header></Header>
      <div className="flex items-center justify-center min-h-screen bg-base-200">
  
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-gray-200">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-4">Register</h1>

          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Full Name</label>
              <input
                type="text"
                name="displayName"
                required
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter your name"
              />

              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Photo URL"
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                required
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter your email"
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                required
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter password"
              />

              <button className="btn text-white mt-4 rounded-full bg-gradient-to-r from-pink-500 to-red-600">
                Register
              </button>
            </fieldset>
          </form>

          <div className="divider">or</div>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white rounded-full text-black border-[#e5e5e5]"
          >
            <FaGoogle />
            Continue with Google
          </button>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link className="text-blue-500 hover:text-blue-800 font-medium" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
  );
};

export default Register;
