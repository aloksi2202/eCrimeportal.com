import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminNavbar from "./Components/AdminNavbar";
import AdminIndex from "./AdminIndex";
import AddOfficer from "./AddOfficer";
import AddAdmin from "./AddAdmin";
import AdminProfile from "./AdminProfile";
import ComplaintViewAdmin from "./ComplaintViewAdmin";
import ViewResolvedComplaint from "./ViewResolvedComplaint";
import AdminMap from "./AdminMap";

const AdminMain = () => {
  return (
    <div>
      <div>
        <AdminNavbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<AdminIndex />}></Route>

          <Route path="/AddOfficer" element={<AddOfficer />}></Route>
          <Route path="/AddAdmin" element={<AddAdmin />}></Route>
          <Route path="/AdminProfile" element={<AdminProfile />}></Route>
          <Route path="/ComplaintView" element={<ComplaintViewAdmin />}></Route>
          <Route path="/AdminMap" element={<AdminMap />}></Route>
          <Route
            path="/ViewResolvedComplaint"
            element={<ViewResolvedComplaint />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default AdminMain;
