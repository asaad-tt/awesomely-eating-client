import React, { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import cooking from "../SignUp/cooking.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { RiseLoader } from "react-spinners";

const SignUp = () => {
  const { createUser, updateName, signInWithGoogle } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUP = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // update user name
        updateName(name)
          .then(() => {
            toast.info("name updated", { autoClose: 800 });
          })
          .catch((error) => {
            toast.error(error.message);
          });
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
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
      {loading ? (
        <>
          <RiseLoader
            color={`#44bd32`}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            style={{ margin: "auto" }}
          />
          <p className="text-2xl">Please wait......</p>
        </>
      ) : (
        <div>
          {" "}
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
              <div className="text-center lg:text-left">
                <Lottie animationData={cooking} loop={true} />
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl pt-5 text-primary text-center font-bold">
                  Register now!
                </h1>
                <form onSubmit={handleSignUP} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="enter your email"
                      className="input input-bordered"
                    />
                  </div>
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
                      value="Sign Up"
                    />
                  </div>
                </form>
                <p className="text-center">login with social account</p>

                <p className="text-center w-full py-3">
                  <button
                    onClick={handleGoogleSign}
                    className="btn  btn-primary "
                  >
                    {" "}
                    <span className="mr-2">
                      <FaGoogle></FaGoogle>
                    </span>{" "}
                    google
                  </button>
                </p>
                <p className="text-center pb-5 ">
                  Already have an account?{" "}
                  <Link className="text-primary font-bold" to="/login">
                    Login
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
