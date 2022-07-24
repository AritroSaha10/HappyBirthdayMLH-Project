import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import About from "./About";
// import Home from "./Home";

import Navbar from "./components/Navbar"

import { AnimatePresence } from "framer-motion"


const Home = lazy(() => import("./pages/Home"))
const Page404 = lazy(() => import("./pages/404"))
const WebDev = lazy(() => import("./pages/WebDev"))
const Algorithms = lazy(() => import("./pages/Algorithms"))
const About = lazy(() => import("./pages/About"))

const App: React.FC = () => (
  <AnimatePresence exitBeforeEnter>
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/HappyBirthdayMLH-Project" element={<Home />} />
            <Route path="/HappyBirthdayMLH-Project/web-dev" element={<WebDev />} />
            <Route path="/HappyBirthdayMLH-Project/algorithms" element={<Algorithms />} />
            <Route path="/HappyBirthdayMLH-Project/about" element={<About />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  </AnimatePresence>
);
export default App;