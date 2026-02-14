import AppLayout from "@/layout/AppLayout";
import HomePage from "@/pages/HomePage";
import UserPage from "@/pages/UserPage";
import UsersPage from "@/pages/UsersPage";
import { Route, Routes } from "react-router-dom";
import Payment from "@/components/Payment";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/payments" element={<Payment />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
