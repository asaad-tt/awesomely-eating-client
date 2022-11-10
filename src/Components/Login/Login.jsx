import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import kitchen from "./kitchen.json";
import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.info("login success", { autoClose: 800 });
        form.reset();

        const currentUser = {
          email: user?.email,
        };
        console.log(currentUser);

        // get jwt token

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("awesomely-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => toast.error(error.message, { autoClose: 800 }));
  };

  const handleGoogleSign = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.info("login success", { autoClose: 800 });
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <Lottie animationData={kitchen} loop={true} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl pt-5 text-primary text-center font-bold">
              Login now!
            </h1>
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="enter your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="type password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center">login with social account</p>

            <p className="text-center w-full py-3">
              <button onClick={handleGoogleSign} className="btn  btn-primary ">
                {" "}
                <span className="mr-2">
                  <FaGoogle></FaGoogle>
                </span>{" "}
                google
              </button>
            </p>

            <p className="text-center pb-5 ">
              New to Awesomely Eating?{" "}
              <Link className="text-primary font-bold" to="/signup">
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
