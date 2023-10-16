import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

function SignInPage() {
  const { signInUser } = useContext(AuthContext); // Use useContext within the function

  const handleSign = async (e) => {
    e.preventDefault();
    console.log("Clicked Sign Up Button");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    try {
      const result = await signInUser(email, password);
      const user = {
        email,
        lastLoggedAt: result.user?.metadata?.lastSignInTime,
      };
      fetch("http://localhost:5000/user", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
      .then((res) => res.json(user))
      .then((data=>{
        console.log(data);
      }))
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold p-4">Welcome to Our Platform</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSign}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
