import { Fragment, useState, useEffect } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import FAQs from "./components/FAQs/FAQs";
import Footer from "./components/Footer/Footer";
import MobileNavigation from "./components/Navbar/MobileNavigation";
function App() {
  const getWindowWidth = () => {
    const { innerWidth } = window;
    return innerWidth;
  };

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  const [showMobileNavigation, setShowMobileNavigation] = useState(false);
  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth > 900) {
      setShowMobileNavigation(false);
    }
  }, [windowWidth]);
  const toggleNavigationHandler = () => {
    setShowMobileNavigation((prevState) => !prevState);
  };
  const closeMobileNavigationHandler = () => {
    setShowMobileNavigation(false);
  };
  const webPageContent = (
    <Fragment>
      <Features />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Gallery />
      <FAQs />
      <Footer />
    </Fragment>
  );
  return (
    <div className="App">
      <Navbar
        showMobileNavigation={showMobileNavigation}
        onToggleNavigation={toggleNavigationHandler}
        windowWidth={windowWidth}
      />
      {showMobileNavigation && (
        <MobileNavigation onCloseNavigation={closeMobileNavigationHandler} />
      )}
      <Home />
      {!showMobileNavigation && webPageContent}
    </div>
  );
}

export default App;
