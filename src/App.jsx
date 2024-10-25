import { useEffect } from "react";
import "./App.css";
import Login from "./component/auth/Login";
import AdminDashboard from "./component/dashboard/AdminDashboard";
import EmployeDashboard from "./component/dashboard/EmployeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

function App() {
  useEffect(() => {
    // setLocalStorage();
    getLocalStorage();
  }, []);
  return (
    <div className="text-white">
      <Login />
      {/* <EmployeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  );
}

export default App;
