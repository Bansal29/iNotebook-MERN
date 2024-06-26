// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = (props) => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch(
//       "https://i-notebook-mern-xi.vercel.app/api/auth/login",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: credentials.email,
//           password: credentials.password,
//         }),
//       }
//     );
//     const json = await response.json();
//     console.log(json);
//     if (json.success) {
//       localStorage.setItem("token", json.auth_token);
//       console.log(localStorage.length);
//       props.showAlert("Login successfull!", "success");
//       navigate("/");
//     } else {
//       props.showAlert("Invalid credentials!", "danger");
//     }
//   };
//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             aria-describedby="emailHelp"
//             value={credentials.email}
//             onChange={onChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             name="password"
//             value={credentials.password}
//             onChange={onChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Log In
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://i-notebook-mern-xi.vercel.app/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.auth_token);
      console.log(localStorage.length);
      props.showAlert("Login successful!", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid credentials!", "danger");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="form-image">
          <img
            src="https://learn.g2.com/hubfs/G2CM_FI671_Learn_Article_Images_%5BNote_taking_apps%5D_V1b.png"
            alt="Note Taking"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="login-title">Log In</h2>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              value={credentials.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
