import React, { useContext } from "react";
import Lottie from "lottie-react";
import cooking from "../SignUp/cooking.json";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser, updateName } = useContext(AuthContext);
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
      })
      .catch((error) => console.error(error));
  };

  return (
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
  );
};

export default SignUp;
