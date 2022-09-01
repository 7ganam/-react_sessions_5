import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../components/HomePage";
import AboutPage from "../../components/AboutPage";
import CoursePage from "../../components/CoursePage";
import MainCoursePage from "../../components/MainCourse";
import PricingsPage from "../../components/PricingsPage";
import JsCoursesComponent from "../../components/FreePricingComponent";
import ProPricingComponent from "../../components/ProPricingComponent";
import NoMatchPage from "../../components/NoMatchPage";
import { Users } from "../../components/Users";
import { RawNavbar } from "../../components/RawNavBar";
import { StyledNavBar } from "../../components/StyledNavBar";
import UseNavigatePage from "../../components/UseNavigatePage";
function App4Navigation() {
  return (
    <div>
      <RawNavbar></RawNavbar>
      <StyledNavBar></StyledNavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses/:courseId" element={<CoursePage />} />
        <Route path="/courses/main-course" element={<MainCoursePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/pricing" element={<PricingsPage />}>
          <Route path="free" element={<JsCoursesComponent />} />
          <Route path="pro" element={<ProPricingComponent />} />
        </Route>
        <Route path="/navigateDemo" element={<UseNavigatePage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App4Navigation;
