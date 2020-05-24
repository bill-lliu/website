import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Typed from 'typed.js';

class Landing extends Component {
    render() {
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a href="https://www.linkedin.com/in/bill-lliu/" target="_blank">
                            <img src={require('../images/profile.png')} alt="profile.png" className="headshot-img"/>
                        </a>
                        <div className="banner">
                            {/* <h6>HELLO, MY NAME IS</h6> */}
                            <h1>BILL LIU</h1>
                            {/* strings are repeated in order to increase their frequency through chance */}
                            <TypedReact style={{marginBottom:'15px'}}
                                strings={[
                                    'DEVELOPER','ENGINEER','STUDENT','HACKER',
                                    // 'DEVELOPER','ENGINEER','STUDENT','HACKER',
                                    // 'DEVELOPER','ENGINEER','STUDENT','HACKER',
                                    // 'DEVELOPER','ENGINEER','STUDENT','HACKER',
                                    'OPEN SOURCE CONTRIBUTOR','INNOVATOR','SCIENTIST','ADVOCATE','TEDx SPEAKER','TECH ENTHUSIAST','SHAD ALUMNUS',
                                    // 'OPEN SOURCE CONTRIBUTOR','INNOVATOR','SCIENTIST','ADVOCATE','SPEAKER','TECH ENTHUSIAST','SHAD ALUMNUS',
                                    // 'OPEN SOURCE CONTRIBUTOR','INNOVATOR','SCIENTIST','ADVOCATE','SPEAKER','TECH ENTHUSIAST','SHAD ALUMNUS',
                                    'READER','WRITER','CONTENT CREATOR','ALPINE SKIER','NORDIC SKIER','SWIMMER','LEARNER','TEACHER','ENVIRONMENTALIST',
                                    // 'READER','WRITER','CONTENT CREATOR','ALPINE SKIER','NORDIC SKIER','SWIMMER','LEARNER','TEACHER','ENVIRONMENTALIST',
                                    'AMATEUR CHEF','NOODLE CONNOISSEUR','RUNNER-IN-TRAINING','HIP-HOP DANCER','GAMER',
                                ]}
                            />
                            
                            <hr/> {/* line break */}

                            <p>React | Javascript | Python | C++ | Java | MongoDB | Android Studio | HTML & (S)CSS</p>

                            <div className="social-links">

                                {/* LinkedIn Logo */}
                                <a href="https://linkedin.com/in/bill-lliu" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-linkedin-square"></i>
                                </a>
                                {/* Github Logo */}
                                <a href="https://github.com/bill-lliu" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-github-square"></i>
                                </a>
                                {/* Devpost Logo */}
                                <a href="https://devpost.com/bill-lliu" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-dev"></i>
                                </a>
                                {/* Medium Logo */}
                                <a href="https://medium.com/@bill.lliu" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-medium"></i>
                                </a>


                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;


//Typed.js component for flashy animations on landing page
//might move to separate file if this one gets crowded
class TypedReact extends React.Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
        // your desired props to this destructuring assignment.
        const { strings } = this.props;
        // You can pass other options here, such as typing speed, back speed, etc.
        const options = {
            strings: strings,
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            loopCount: Infinity,
            shuffle: true,
            smartBackspace: true,
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
        // to prevent memory leaks
        this.typed.destroy();
    }
  
    render() {
        return (
            <div className="wrap">
                {/* <h1>Typed.js</h1> */}
                <div className="type-wrap">
                    <span
                        style={{ whiteSpace: 'pre' }}
                        ref={(el) => { this.el = el; }}
                    />
                </div>
                {/* <button onClick={() => this.typed.toggle()}>Toggle</button>
                <button onClick={() => this.typed.start()}>Start</button>
                <button onClick={() => this.typed.stop()}>Stop</button>
                <button onClick={() => this.typed.reset()}>Reset</button>
                <button onClick={() => this.typed.destroy()}>Destroy</button> */}
            </div>
        );
    }
}