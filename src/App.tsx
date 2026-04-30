import React, { Suspense } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import StatsBar from "./components/sections/StatsBar";
import "./styles/globals.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoursesPage from "./components/pages/CoursesPage";

const Courses = React.lazy(() => import("./components/sections/Courses"));
const AboutUs = React.lazy(() => import("./components/sections/AboutUs"));
const CtaBanner = React.lazy(() => import("./components/sections/CtaBanner"));
const Testimonials = React.lazy(
  () => import("./components/sections/Testimonials"),
);
const Pricing = React.lazy(() => import("./components/sections/Pricing"));

const App: React.FC = () => (
  <>
    <BrowserRouter>
    <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <StatsBar />
                <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
                  <Courses />
                  <AboutUs />
                  <CtaBanner />
                  <Testimonials />
                  <Pricing />
                </Suspense>
              </>
            }
          />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      </main>
    </BrowserRouter>
    <Footer />
  </>
);

export default App;
