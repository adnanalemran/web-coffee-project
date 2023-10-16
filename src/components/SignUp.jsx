import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSign = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //firebase create user 
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        //new user has been created

        const createAt = result.user?.metadata?.creationTime;

        const user = { email,createAt};
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              alert("user db added");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold p-4 ">Sign Up Now </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSign}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                  placeholder="password"
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
                <button className="btn btn-primary">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
