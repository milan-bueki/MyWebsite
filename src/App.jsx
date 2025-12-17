import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import LatestProject from "./components/LatestProject/LatestProject";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// import Impressum from "./components/Impressum/Impressum";
import DiaryPage from "./components/DiaryPage/DiaryPage.jsx"; // Tagebuch-Seite

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
          {/* Startseite MIT Header */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <LatestProject />
                {/* <Projects /> */}
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Tagebuch-Seite OHNE Header */}
          <Route
            path="/diary"
            element={
              <>
                <DiaryPage />
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
