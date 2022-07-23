import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import About from "./About";
// import Home from "./Home";

import Navbar from "./components/Navbar"

const Home = lazy(() => import("./pages/Home"))
const Page404 = lazy(() => import("./pages/404"))
const WebDev = lazy(() => import("./pages/WebDev"))
const Algorithms = lazy(() => import("./pages/Algorithms"))
const About = lazy(() => import("./pages/About"))

const App: React.FC = () => (
  <BrowserRouter>
    <Navbar />

    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-dev" element={<WebDev />} />
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
export default App;