import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

const [loginData, setloginData] = useState({
  userName:"",
  password:""
})


const handleInputChange = (e) => {
  e.preventdefault
console.log(e.target.name)
setloginData(prev => ({
  ...prev, 
 [ e.target.name]:[e.target.value
 ]
}))
}


console.log(loginData)


  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-xl">
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-2xl justify-center mb-2">
          Login
        </h2>

        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">username</span>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className="input input-bordered w-full"
            onChange={handleInputChange}
          />
        </div>

        {/* Password */}
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text">Password</span>
            <span className="label-text-alt link link-hover">
              Forgot password?
            </span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
            onChange={handleInputChange}
          />
        </div>

        {/* Button */}
        <div className="form-control mt-4">
          <button className="btn btn-neutral w-full">
            Login
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm mt-4">
          Don&apos;t have an account?{" "}
          <span className="link link-primary">
            <Link to='/singup' className="text-blue-400 underline" >Sign up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
