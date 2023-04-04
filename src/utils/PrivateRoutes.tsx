import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUserStore } from "../stores/user";

const PrivateRoutes = () => {
   const currentUser = useUserStore((state) => state.currentUser);
   return currentUser !== null ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
