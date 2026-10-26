import React from "react";
import Navbar from "../Components/Navbar";
import Home from "./Home";
import ContactUs from "./ContactUs";
import About from "./About";
import Services from "./Services";
import First from "./First";
import Complaint from "./Complaint";
import TrackComplaint from "./TrackComplaint";
import TrackComplaintFirst from "./TrackComplaintFirst";
import { Link, Route, Routes } from "react-router-dom";
import UserMap from "./UserMap";
import RecentComplaints from "./RecentComplaints";
import CyberAwarenessTips from "./CyberAwarenessTips";

const UserMain = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="pt-21 ">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/Servces" element={<Services />}></Route>
          <Route path="/First" element={<First />}></Route>
          <Route path="/Complaint" element={<Complaint />}></Route>
          <Route path="/TrackComplaint" element={<TrackComplaint />}></Route>
          <Route path="/RecentComplaints" element={<RecentComplaints />}></Route>
          <Route path="/CyberAwarenessTips" element={<CyberAwarenessTips />}></Route>
          <Route
            path="/TrackComplaintFirst"
            element={<TrackComplaintFirst />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default UserMain;
