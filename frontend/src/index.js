/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import Login from './views/Login';
import Registration from './views/Registration'; // Import your Dashboard component
import ForgotPassword from './views/ForgotPassword';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/student/*" element={<AdminLayout />} />
      <Route path="/student" element={<Navigate to="/student/dashboard" replace />} />
      <Route path="/" element={<Login />} />
       
       <Route path="/Registration" element={<Registration />} />
       <Route path="/ForgotPassword" element={<ForgotPassword />} />
    </Routes>
  </BrowserRouter>
);
