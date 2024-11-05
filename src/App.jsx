import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./component/auth/Login";
import AdminDashboard from "./component/dashboard/AdminDashboard";
import EmployeDashboard from "./component/dashboard/EmployeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const authData = useContext(AuthContext);
  // console.log();
  // setLocalStorage()
  const [user, setuser] = useState(null);
  const handelLogin = (email, password) => {
    //  console.log(email,password);
    if (email === "admin@me.com" && password == "123") {
      setuser("admin");
    } else if (
      authData &&
      authData?.employees.find(
        (e) => email === e.email && password === e.password 
      )
    ) {
      setuser("user");
    } else {
      console.log("Invalid Credentials");
    }
  };
  // handelLogin("user@me.com", "123");
  return (
    <div className="text-white">
      {!user ? <Login handelLogin={handelLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeDashboard />}
      {/* <EmployeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  );
}

export default App;
