import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import LatestProject from "./components/LatestProject/LatestProject";
import Projects from "./components/Projects/Projects";
import ProjectPages from "./components/Projects/ProjectPages/ProjectPages";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import DiaryPage from "./components/DiaryPage/DiaryPage.jsx";
import PortfolioProject from "./components/Projects/ProjectDetails/PortfolioProject/PortfolioProject";
import Quiz from "./components/Projects/ProjectDetails/Quiz/Quiz";

const styles = {
  page: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: "100vw",
    margin: 0,
    padding: 0,
    color: "#ddd",
    backgroundColor: "#121212",
    minHeight: "100vh",
    boxSizing: "border-box",
    overflowX: "hidden",
  },
};

function App() {
  return (
    <Router>
      <div style={{ ...styles.page, paddingTop: 0 }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <LatestProject />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route
            path="/projects"
            element={
              <>
                <Header />
                <ProjectPages />
                <Footer />
              </>
            }
          />

          <Route
            path="/diary"
            element={
              <>
                <DiaryPage />
                <Footer />
              </>
            }
          />

          <Route
            path="/projects/portfolio"
            element={
              <>
                <Header />
                <PortfolioProject />
                <Footer />
              </>
            }
          />

          <Route
            path="/projects/quiz"
            element={
              <>
                <Header />
                <Quiz />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;