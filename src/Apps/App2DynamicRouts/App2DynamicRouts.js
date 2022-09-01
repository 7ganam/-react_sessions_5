import React from "react";
import { Routes, Route } from "react-router-dom";
// import { About } from './components/About'
import HomePage from "../../components/HomePage";
import AboutPage from "../../components/AboutPage";
import CoursePage from "../../components/CoursePage";
import MainCoursePage from "../../components/MainCourse";
import { Users } from "../../components/Users";
function App2DynamicRouts() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/courses/:courseId" element={<CoursePage />} />
      <Route path="/courses/main-course" element={<MainCoursePage />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default App2DynamicRouts;
