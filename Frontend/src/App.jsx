import React from "react";

import Police from "./Pages/Police module/Police";

import TrackComplaintFirst from "./Pages/TrackComplaintFirst";
import UpdateComplaint from "./Pages/Police module/UpdateComplaint";

import UserMap from "./Pages/UserMap";
import AdminIndex from "./Pages/Admin Module/AdminIndex";

import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import Services from "./Pages/Services";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import First from "./Pages/First";
import Footer from "./Components/Footer";
import Complaint from "./Pages/Complaint";
import TrackComplaint from "./Pages/TrackComplaint";

import ViewComplaint from "./Pages/Police module/ViewComplaint";
import PoliceMain from "./Pages/Police module/PoliceMain";
import UserMain from "./Pages/UserMain";
import AdminMain from "./Pages/Admin Module/AdminMain";
import ComplanitManagement from "./Pages/Admin Module/Components/ComplanitManagement";
import AddOfficer from "./Pages/Admin Module/AddOfficer";
import AddAdmin from "./Pages/Admin Module/AddAdmin";
import AdminProfile from "./Pages/Admin Module/AdminProfile";
import PoliceProfile from "./Pages/Police module/PoliceProfile";
import ComplaintViewAdmin from "./Pages/Admin Module/ComplaintViewAdmin";
import ViewResolvedComplaint from "./Pages/Admin Module/ViewResolvedComplaint";
import RecentComplaints from "./Pages/RecentComplaints";
import CyberAwarenessTips from "./Pages/CyberAwarenessTips";
import AdminMap from "./Pages/Admin Module/AdminMap";
import PoliceMap from "./Pages/Police module/PoliceMap";

const App = () => {
  return (
    <div className=" ">
      <div className=" ">
        <Routes>
          <Route path="/AddOfficer" element={<AddOfficer />}></Route>

          <Route path="/" element={<First />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/First" element={<First />}></Route>
          <Route path="/LogIn" element={<LogIn />}></Route>
          <Route path="/UserMain" element={<UserMain />}>
            <Route path="About" element={<About />}></Route>
            <Route path="ContactUs" element={<ContactUs />}></Route>
            <Route path="RecentComplaints" element={<RecentComplaints />}></Route>
 <Route path="CyberAwarenessTips" element={<CyberAwarenessTips />}></Route>
            <Route path="Services" element={<Services />}></Route>

            <Route path="Complaint" element={<Complaint />}></Route>
            <Route path="TrackComplaint" element={<TrackComplaint />}></Route>
            <Route
              path="TrackComplaintFirst"
              element={<TrackComplaintFirst />}
            ></Route>
          </Route>
          <Route path="/PoliceMain" element={<PoliceMain />}>
            <Route
              path="TrackComplaintFirst"
              element={<TrackComplaintFirst />}
            ></Route>
            <Route path="UpdateComplaint" element={<UpdateComplaint />}></Route>
            <Route path="PoliceMap" element={<PoliceMap />}></Route>
            <Route path="PoliceProfile" element={<PoliceProfile />}></Route>

            <Route path="ViewComplaint" element={<ViewComplaint />}></Route>
          </Route>

          <Route path="/AdminMain" element={<AdminMain />}>
            <Route path="ComplaintView" element={<ComplaintViewAdmin />}></Route>
            <Route path="ViewResolvedComplaint" element={<ViewResolvedComplaint />}></Route>
             <Route path="AdminMap" element={<AdminMap />}></Route>
            <Route
              path="AddOfficer"
              element={<AddOfficer />}
            ></Route>
             <Route
              path="AddAdmin"
              element={<AddAdmin/>}
            ></Route>
            <Route
              path="AdminProfile"
              element={<AdminProfile/>}
            ></Route>
          
          </Route>
          
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
