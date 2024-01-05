import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Login";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
