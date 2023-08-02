//main.js, central file main display

import React from "react";
import { Content, Drawer, Header, Layout, Navigation } from "react-mdl";
import { Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer.js";
import Main from "./components/main.js";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header"
          title={
            <Link
              className="nav-item"
              style={{ textDecoration: "none", color: "white" }}
              to="/"
            >
              BILL LIU
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link className="nav-item" to="/about">
              ABOUT ME
            </Link>
            <Link className="nav-item" to="/resume">
              RESUME
            </Link>
            {/* <Link className="nav-item" to="/portfolio">PORTFOLIO</Link> */}
            <Link className="nav-item" to="/contact">
              CONTACT
            </Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link
              className="nav-item"
              style={{ textDecoration: "none", color: "black" }}
              to="/"
            >
              HOME
            </Link>
          }
        >
          <Navigation>
            <Link className="nav-item" to="/about">
              ABOUT ME
            </Link>
            <Link className="nav-item" to="/resume">
              RESUME
            </Link>
            {/* <Link className="nav-item" to="/portfolio">PORTFOLIO</Link> */}
            <Link className="nav-item" to="/contact">
              CONTACT
            </Link>
          </Navigation>
        </Drawer>
        <Content
          style={
            {
              // background: 'rgb(127, 127, 213)',
              // background: '-webkit-linear-gradient(to bottom, rgb(91, 195, 230), rgb(134, 168, 231), rgb(127, 127, 213))',
              // background: 'linear-gradient(to bottom, rgb(91, 195, 230), rgb(134, 168, 231), rgb(127, 127, 213))',
            }
          }
        >
          {/* background is written here and not in a component in order to reduce redudancy of re-passing the Main component */}
          <div className="box-background">
            <ul className="box-area">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <Main />
          </div>
          <Footer />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
