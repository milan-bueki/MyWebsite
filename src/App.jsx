import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import LatestProject from "./components/LatestProject/LatestProject"
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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
    <>
      <Header />
      <div style={{ ...styles.page, paddingTop: 0 /* Platz für fixed Header */ }}>
        <Hero />
        <LatestProject />
        {/*<Projects />*/}
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
