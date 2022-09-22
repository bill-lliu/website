//about.js

import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={12}>
                        <h2>A Little About Myself</h2>
                    </Cell>
                    <Cell col={4}>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a href="https://www.linkedin.com/in/bill-lliu/" target="_blank">
                            <img
                                src={require('../images/profile.png')} 
                                alt="profile.png" 
                                className="headshot-img" 
                                style={{padding:"1em"}} 
                            />
                        </a>
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
                            {/* text below my picture */}
                        </p>
                    </Cell>
                    <Cell col={8}>
                        <p>
                            Hello! My name is Bill Liu, and I am currently a fourth year 
                            Computer Engineering student at the University of Waterloo. 
                        </p>
                        <p>
                            When I'm not tending to my six course load of work, 
                            you can find me on the hills
                            <span role="img" aria-label="skier">⛷️</span>
                            , in the kitchen
                            <span role="img" aria-label="ramen">🍜</span>
                            , or grinding away at a hackathon
                            <span role="img" aria-label="man_technologist">👨‍💻</span>
                            . When I feel inspired, I also write! You can find some of my work at 
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a href="https://medium.com/@bill.lliu" target="_blank" style={{color:"white",textDecoration:"none"}}> @bill.lliu </a>
                             on Medium. 
                        </p>
                        <p>
                            I could go on and on about more generic details of myself, 
                            but I would much rather talk person-to-person! 
                            Why not give the chat on the bottom right a try? 
                            I can respond whenever I next check my phone. 
                        </p>
                    </Cell>
                    <Cell row={12}>
                        {/* insert other medias here maybe? ex discord ig fb */}
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default About;