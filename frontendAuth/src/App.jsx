import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPages from "./pages/LoginPages";
import RegisterPages from "./pages/RegisterPages";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/NotFound";
import { useSelector } from "react-redux";


function App() {
  const authenticate = useSelector((state) => state.users.authenticate);
  const authenticateStorage = localStorage.getItem('authenticate');


  return (
    <>
    <BrowserRouter>
      <Routes>
      {authenticate || authenticateStorage ? (
          <>
            <Route path="/login" element={<LoginPages />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        ) : (
          <>
            <Route path="/register" element={<RegisterPages />} />
            <Route path="/login" element={<LoginPages />} />
            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
