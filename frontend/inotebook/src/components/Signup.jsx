// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = (props) => {
//   const [credentials, setCredentials] = useState({
//     username: "",
//     email: "",
//     password: "",
//     cpassword: "",
//   });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if password and confirm password match
//     if (credentials.password !== credentials.cpassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const response = await fetch(
//       "https://i-notebook-mern-xi.vercel.app/api/auth/createuser",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: credentials.username,
//           email: credentials.email,
//           password: credentials.password,
//         }),
//       }
//     );
//     const json = await response.json();
//     console.log(json);
//     if (json.success) {
//       props.showAlert("Successfully registered!", "success");
//       navigate("/login");
//     } else {
//       props.showAlert("Invalid Details!", "danger");
//     }
//   };

//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="username" className="form-label">
//             Username
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="username"
//             name="username"
//             onChange={onChange}
//             value={credentials.username}
//             aria-describedby="emailHelp"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             onChange={onChange}
//             value={credentials.email}
//             aria-describedby="emailHelp"
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
//             onChange={onChange}
//             value={credentials.password}
//             minLength={5}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="cpassword" className="form-label">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="cpassword"
//             name="cpassword"
//             onChange={onChange}
//             value={credentials.cpassword}
//             minLength={5}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           SignUp
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (credentials.password !== credentials.cpassword) {
      alert("Passwords do not match!");
      return;
    }

    const response = await fetch(
      "https://i-notebook-mern-xi.vercel.app/api/auth/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.username,
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      props.showAlert("Successfully registered!", "success");
      navigate("/login");
    } else {
      props.showAlert("Invalid Details!", "danger");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="form-image">
          <img
            src="https://learn.g2.com/hubfs/G2CM_FI671_Learn_Article_Images_%5BNote_taking_apps%5D_V1b.png"
            alt="Note Taking"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="signup-title">Sign Up</h2>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={onChange}
              value={credentials.username}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={onChange}
              value={credentials.email}
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
              onChange={onChange}
              value={credentials.password}
              minLength={5}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              name="cpassword"
              onChange={onChange}
              value={credentials.cpassword}
              minLength={5}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
