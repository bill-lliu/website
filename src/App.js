import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main.js';
import Footer from './components/footer.js';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
      <Header className="header" title={<Link className="nav-item" style={{textDecoration:'none',color:'white'}} to="/">BILL LIU</Link>} scroll>
        <Navigation>
          <Link className="nav-item" to="/about">ABOUT ME</Link>
          <Link className="nav-item" to="/resume">RESUME</Link>
          <Link className="nav-item" to="/portfolio">PORTFOLIO</Link>
          <Link className="nav-item" to="/contact">CONTACT</Link>
        </Navigation>
      </Header>
      <Drawer title={<Link className="nav-item" style={{textDecoration:'none',color:'black'}} to="/">HOME</Link>}>
        <Navigation>
          <Link className="nav-item" to="/about">ABOUT ME</Link>
          <Link className="nav-item" to="/resume">RESUME</Link>
          <Link className="nav-item" to="/portfolio">PORTFOLIO</Link>
          <Link className="nav-item" to="/contact">CONTACT</Link>
        </Navigation>
      </Drawer>
      <Content style={{
        // background: 'rgb(127, 127, 213)',
        // background: '-webkit-linear-gradient(to bottom, rgb(91, 195, 230), rgb(134, 168, 231), rgb(127, 127, 213))',
        // background: 'linear-gradient(to bottom, rgb(91, 195, 230), rgb(134, 168, 231), rgb(127, 127, 213))',
      }}>
        {/* background is written here and not in a component in order to reduce redudancy of re-passing the Main component */}
        <div className="lava-background">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="border"></div>
          <div className="border"></div>
          <Main/>
        </div>
        <svg>
          <defs>
            <filter id="goo">
                <feGaussianBlur in='SourceGraphic'
                stdDeviation='10'/>
                <feColorMatrix in='name' mode='matrix'
                  values='1 0 0 0 0
                          0 1 0 0 0
                          0 0 1 0 0
                          0 0 0 30 -15'/>
                <feBlend in='SourceGraphic'/>
            </filter>
          </defs>
        </svg>
        {/* squares background
        <div className="box-background">
          <ul className="box-area">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <Main/>
        </div> */}
      <Footer/>
      </Content>
    </Layout>
</div>
  );
}

export default App;