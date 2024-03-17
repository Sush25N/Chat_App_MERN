import React from "react";
import logo from "../icons/live-chat.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="Logo" className="welcome-logo" />
      </div>
      <div className="login-box">
        <div className="heading">Sign In</div>
        <form action="" className="form">
          <input
            required
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
          />
          <input
            required
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <span className="forgot-password">
            <a href="#">Forgot Password ?</a>
          </span>
          <input className="login-button" type="submit" value="Sign In" />
        </form>
        <div className="social-account-container">
          <span className="title">Or Sign in with</span>
          <div className="social-accounts">
            <button className="social-button google">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
            </button>
            <button className="social-button twitter">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React from "react";
// import logo from "../icons/live-chat.png";
// import { Button, TextField } from "@mui/material";

// const Login = () => {
//   return (
//     <div className="login-container">
//       <div className="image-container">
//         <img src={logo} alt="logo" className="welcome-logo" />
//       </div>
//       <div className="login-box">
//         <p>Login to your Account</p>
//         <TextField
//           id="standard-basic"
//           label="Enter User Name"
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//         />
//         <Button variant="outlined">Login</Button>
//       </div>
//     </div>
//   );
// };

// export default Login;
