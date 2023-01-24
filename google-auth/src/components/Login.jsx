import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
//import { useEffect } from "react";

const Login = () => {

  // function handleCallbackResponse(response){
  //   console.log("Encoded JWT ID token: " + response.credential);
  // }

  // useEffect(() => {
  //   // global google
  //   google.accounts.id.initialize({
  //     client_id: "494694620352-2hk4sab1vqtfds2m2nqu8t6hb9mm94jr.apps.googleusercontent.com",
  //     callback: handleCallbackResponse
  //   });

  //   google.accounts.id.renderButton(
  //     document.getElementsByClassName("google2"),
  //     {theme: "outline", size: "large"}
  //   );
  // }, []);
  return (
       <div className="Login p-10">
      <h2 className="">Join Today</h2>
      <div className="signIn  mb-3">
        <h4>Sign in with one of the providers</h4>
      </div>
      <div className="form gap-3 p-2">
        <label htmlFor="userName" className="flex">
          Username{" "}
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className="p-2 rounded-1"
        />
        <label htmlFor="email">Email </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          className="p-2 rounded-1"
        />
        <label htmlFor="password">Password </label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
          className="p-2 rounded-1"
        />
        <div className="submitButton">
          <div
            className="button text-white bg-secondary p-3 w-full font-medium rounded-3 
        border-0 align-middle gap-2"
          >
            Submit
          </div>
        </div>
        <p className="line">Or</p>
      </div>
      <div className="signIn-Button gap-4 p-2">
        <button
          className="text-white bg-secondary p-3 w-full font-medium rounded-3 
        border-0 align-middle gap-2 google"
        >
          <FcGoogle size={28} className="me-2" />
          Sign in with Google
        </button>
        <button
          className="text-white bg-secondary p-3 w-full font-medium rounded-3 
        border-0 align-middle gap-2"
        >
          <AiFillFacebook size={28} className="me-2" />
          Sign in with Facebook
        </button>
      </div>
      <div className="google2">
      
    </div>
    </div>
  );
};

export default Login;
