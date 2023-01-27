import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/Homepage";
import Login from "./components/Login";
import LoginReg from "./components/LoginReg";

import {Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function App() {

  const [user, setUser] = useState(null)

useEffect(() => {
  const getUser = () => {
    fetch("http://localhost:5000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
        "Access-Control-Allow-Credebtials": true,
      },
    }).then(response => {
      if(response.status === 200) 
      return response.json();
      throw new Error ("authentication failed !")
    }).then(resObject =>{
      setUser(resObject.user)
    })
    .catch((err) =>{
      console.log(err)
    })
  };
  getUser()
}, []);

console.log(user)
  return (
   <div>
    <Layout>
    <Routes> 
      <Route exact path="/" element={<HomePage />} />
      <Route path="/login" element ={user ? <Navigate to="/" /> : < Login />} />
      <Route path="/loginReg" element={ user ? <LoginReg /> : <Navigate to="/login" />} />
    </Routes>
    {/* < Login /> */}
    </Layout>
   </div>
  );
}

// function App({Component, pageProps}) {
//   return (
//    <div>
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//    </div>
//   );
// }

export default App;
