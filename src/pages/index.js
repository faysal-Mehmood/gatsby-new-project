import React from "react";
import ApiSection from "./home/apiContent";
import BusinessProduct from "./home/businessProduct";
import Technology from "./home/technology";
import "./home/styles.scss";
import DeveloperTool from "./home/developerTool";
import HelpArea from "./home/helpSection";
import GetStarted from "./home/getStarted";
// import Footer from "../../components/footer/index";

const Index = () => {
  return (
    <div className="main-area">
      <div className="heroSection">
        <div className="container">
          <h2>
            Build Interactive Learning Apps with Currik's API and Developer
            Tools
          </h2>
          <p>
            Developer tools and resources to integrate our authoring tool into
            your existing learning technology stack.
          </p>
        </div>
      </div>
      {/* api content */}
      <ApiSection />
      {/* bussines product */}
      <BusinessProduct />
      {/* technolgy section */}
      <Technology />
      {/* get started */}
      <GetStarted />
      {/* developer tool */}
      <DeveloperTool />
      {/* help area */}
      <HelpArea />
      {/* footer area */}
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
