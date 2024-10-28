import { useEffect, useState } from "react";
import "./App.css";
import Login from "./component/auth/Login";
import AdminDashboard from "./component/dashboard/AdminDashboard";
import EmployeDashboard from "./component/dashboard/EmployeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

function App() {
  const [user, setuser] = useState(null);
  const handelLogin = (email, password) => {
    //  console.log(email,password);
    if (email === "admin@me.com" && password == "123") {
      console.log("This is admin");
    } else if (email === "user@me.com" && password == "123") {
      console.log("This is users");
    } else {
      console.log("Invalid Credentials");
    }
  };
  // handelLogin("user@me.com", "123");
  return (
    <div className="text-white">
      {!user ? <Login handelLogin={handelLogin} /> : ""}
      {/* <EmployeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  );
}

export default App;
