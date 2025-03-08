import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuthContext } from "../context/AuthContextProvider";
import { enc, AES } from "crypto-js";
const MY_AUTH_APP = "DoFA45-M0pri";
function PrivateRoutes({ children, requiredRole }) {
  // const navigate = useNavigate();
  const decrypt = (encryptedData) => {
    const bytes = AES.decrypt(encryptedData, MY_AUTH_APP);
    const decryptedData = JSON.parse(bytes.toString(enc.Utf8));
    return decryptedData;
  };
  const { isAuthenticated } = useAuthContext();
  const token = Cookies.get("token");

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  const rol = decrypt(Cookies.get("rol"));
  
  if (!requiredRole || String(rol) === String(requiredRole)) {
    return <>{children}</>;
  }
  return <Navigate to="/" />;
  // if (requiredRole && rol !== requiredRole) {
  //   return <Navigate to="/" />;
  // }

  // return <>{element}</>;
}
export default PrivateRoutes;
