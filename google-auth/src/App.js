import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/Homepage";
import Login from "./components/Login";
import LoginReg from "./components/LoginReg";

import {Routes, Route, Navigate } from "react-router-dom";

function App() {

  const user = false;

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
