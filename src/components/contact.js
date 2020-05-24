import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h1 style={{margin:'0'}}>BILL SIYI LIU</h1>
                        {/* <h6 style={{margin:'0'}}>(刘思逸)</h6> */}
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
                            Feel free to email, call, text; <br/>
                            or simply text me using the chat on the bottom right!
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>CONTACT ME</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent>
                                        <a href="mailto:siyi.liu@uwaterloo.ca"><i class="fas fa-envelope-square"></i></a>
                                    </ListItemContent>
                                    <ListItemContent>
                                        <a href="mailto:siyi.liu@uwaterloo.ca">siyi.liu@uwaterloo.ca</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent>
                                        <a href="tel:+16478083188"><i class="fas fa-phone-square-alt"></i></a>
                                    </ListItemContent>
                                    <ListItemContent>
                                        <a href="tel:+16478083188">+1 (647)-808-3188</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent>
                                        <i class="fas fa-building"></i>
                                    </ListItemContent>
                                    <ListItemContent style={{color:"white",fontStyle:"italic",textDecoration:"none"}}>
                                        201 Lester Street <br/>
                                        Waterloo, ON <br/>
                                        N2L 3W3
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                    <Cell col={12}>
                        {/* insert other medias here maybe? ex discord ig fb */}
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;