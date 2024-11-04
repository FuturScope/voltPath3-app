import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LogoutPopup = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Logout Successful",
          showConfirmButton: false,
          timer: 1500,
        });

    
        navigate("/login");
      }
    });
  };

  return (
    <button
      onClick={handleLogout}
    
    >
      Logout
    </button>
  );
};

export default LogoutPopup;
