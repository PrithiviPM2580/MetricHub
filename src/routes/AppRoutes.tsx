import AppLayout from "@/layout/AppLayout";
import HomePage from "@/pages/HomePage";
import UserPage from "@/pages/UserPage";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
