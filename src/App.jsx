import "./App.css";
import Login from "./component/auth/Login"
import EmployeDashboard from "./component/dashboard/EmployeDashboard";

function App() {
  return (
    <div className="text-white" >
      {/* <Login/> */}
      <EmployeDashboard/>
    </div>
  );
}

export default App;
