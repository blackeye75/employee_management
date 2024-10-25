import { useEffect } from "react";
import "./App.css";
import Login from "./component/auth/Login";
import AdminDashboard from "./component/dashboard/AdminDashboard";
import EmployeDashboard from "./component/dashboard/EmployeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

function App() {
  const handelLogin = (email, password) => {
    //  console.log(email,password);
    if (email === "admin@me.com" && password == "123") {
      console.log("This is admin");
    }
  };
  handelLogin("admin@me.com","123");
  return (
    <div className="text-white">
      <Login />
      {/* <EmployeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  );
}

export default App;
