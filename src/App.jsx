import "./App.css";
import Login from "./component/auth/Login"
import AdminDashboard from "./component/dashboard/AdminDashboard";
import EmployeDashboard from "./component/dashboard/EmployeDashboard";

function App() {
  return (
    <div className="text-white" >
      <Login/>
      {/* <EmployeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  );
}

export default App;
