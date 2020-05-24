import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardActions, Button } from 'react-mdl';
//other imports to use CardTitle, CardMenu, IconButton

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        // eslint-disable-next-line default-case
        switch(this.state.activeTab){
            case 0: //Portfolio!
                return (
                    <div className="portfolio-contents">
                        <h2>Welcome to my Software Portfolio</h2>
                        <Card shadow={5} className='card'>
                            <CardText style={{textAlign:'center', marginTop:'1.5em'}}>
                            {/* Here, you will find a nice intro tag to all projects 
                            I've either created or been a part of. For more information, 
                            make sure to check out my Experience page! */}
                            This section of my website is still currently under construction!
                            Please visit my LinkedIn, Devpost, or GitHub to find my past projects, 
                            or simply shoot me a message!
                            </CardText>
                            <CardActions border style={{textAlign:'center'}}>
                                <Button colored href="https://linkedin.com/in/bill-lliu" target="_blank">LinkedIn</Button>
                                <Button colored href="https://devpost.com/bill-lliu" target="_blank">Devpost</Button>
                                <Button colored href="https://github.com/bill-lliu" target="_blank">GitHub</Button>
                            </CardActions>
                        </Card>
                    </div>
                );
            case 1: //Frontend Web
                return (
                    <div className="portfolio-contents">
                        <h6>HTML | (S)CSS | Javascript | React</h6>
                        <div className="portfolio-grid">
                            {/* <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                                <CardTitle style={{color:'white', height:'200px', 
                                background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
                                    Personal Website
                                </CardTitle>
                                <CardText>(you're here now!)</CardText>
                                <CardActions border style={{textAlign:'center'}}>
                                    <Button colored>GitHub</Button>
                                    <Button colored>Devpost</Button>
                                    <Button colored>Live Demo</Button>
                                </CardActions>
                                <CardMenu style={{color:'white'}}>
                                    <IconButton name="share"/>
                                </CardMenu>
                            </Card> */}
                        </div>
                    </div>
                );
            case 2: //Backend Dev
                return (
                    <div className="portfolio-contents">
                        <h6>Python | Javascript | Lodash | Webpack | MongoDB | Firebase</h6>
                        <div className="portfolio-grid">
                            {/* <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                                <CardTitle style={{color:'white', height:'200px', 
                                background:'url(https://cdn-rdc.ea-ad.ca/InfoBase/png/PreviewCard-en.png) center / cover'}}>
                                    GC Infobase
                                </CardTitle>
                                <CardText>(you're here now!)</CardText>
                                <CardActions border style={{textAlign:'center'}}>
                                    <Button colored>GitHub</Button>
                                    <Button colored>Devpost</Button>
                                    <Button colored>Live Demo</Button>
                                </CardActions>
                                <CardMenu style={{color:'white'}}>
                                    <IconButton name="share"/>
                                </CardMenu>
                            </Card> */}
                        </div>
                    </div>
                );
            case 3: //M.L./A.I.
                return (
                    <div className="portfolio-contents">
                        <h6>Tensorflow</h6>
                        <div className="portfolio-grid">
                            {/* <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                                <CardTitle style={{color:'white', height:'200px', 
                                background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
                                    Personal Website
                                </CardTitle>
                                <CardText>(you're here now!)</CardText>
                                <CardActions border style={{textAlign:'center'}}>
                                    <Button colored>GitHub</Button>
                                    <Button colored>Devpost</Button>
                                    <Button colored>Live Demo</Button>
                                </CardActions>
                                <CardMenu style={{color:'white'}}>
                                    <IconButton name="share"/>
                                </CardMenu>
                            </Card> */}
                        </div>
                    </div>
                );
            case 4: //Android
                return (
                    <div className="portfolio-contents">
                        <h6>Android Studio | NFC</h6>
                        <div className="portfolio-grid">
                            {/* <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                                <CardTitle style={{color:'white', height:'200px', 
                                background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
                                    Personal Website
                                </CardTitle>
                                <CardText>(you're here now!)</CardText>
                                <CardActions border style={{textAlign:'center'}}>
                                    <Button colored>GitHub</Button>
                                    <Button colored>Devpost</Button>
                                    <Button colored>Live Demo</Button>
                                </CardActions>
                                <CardMenu style={{color:'white'}}>
                                    <IconButton name="share"/>
                                </CardMenu>
                            </Card> */}
                        </div>
                    </div>
                );
            case 5: //IOS
                return (
                    <div className="portfolio-contents">
                        <h6>Swift</h6>
                        <div className="portfolio-grid">
                            {/* <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                                <CardTitle style={{color:'white', height:'200px', 
                                background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
                                    Personal Website
                                </CardTitle>
                                <CardText>(you're here now!)</CardText>
                                <CardActions border style={{textAlign:'center'}}>
                                    <Button colored>GitHub</Button>
                                    <Button colored>Devpost</Button>
                                    <Button colored>Live Demo</Button>
                                </CardActions>
                                <CardMenu style={{color:'white'}}>
                                    <IconButton name="share"/>
                                </CardMenu>
                            </Card> */}
                        </div>
                    </div>
                );
            case 6: //Hardware
                return (
                    <div className="portfolio-contents">
                        <h6>Arduino | C++</h6>
                        <div className="portfolio-grid">
                            {/* <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                                <CardTitle style={{color:'white', height:'200px', 
                                background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
                                    Personal Website
                                </CardTitle>
                                <CardText>(you're here now!)</CardText>
                                <CardActions border style={{textAlign:'center'}}>
                                    <Button colored>GitHub</Button>
                                    <Button colored>Devpost</Button>
                                    <Button colored>Live Demo</Button>
                                </CardActions>
                                <CardMenu style={{color:'white'}}>
                                    <IconButton name="share"/>
                                </CardMenu>
                            </Card> */}
                        </div>
                    </div>
                );
            case 7: //Big Data
                return (
                    <div className="portfolio-contents">
                        <h6>Python | MySQL | R</h6>
                        <div className="portfolio-grid">
                            {/* <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                                <CardTitle style={{color:'white', height:'200px', 
                                background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
                                    Personal Website
                                </CardTitle>
                                <CardText>(you're here now!)</CardText>
                                <CardActions border style={{textAlign:'center'}}>
                                    <Button colored>GitHub</Button>
                                    <Button colored>Devpost</Button>
                                    <Button colored>Live Demo</Button>
                                </CardActions>
                                <CardMenu style={{color:'white'}}>
                                    <IconButton name="share"/>
                                </CardMenu>
                            </Card> */}
                        </div>
                    </div>
                );
            case 8: //Video Game Dev
                return (
                    <div className="portfolio-contents">
                        <h6>Java | Python | Javascript</h6>
                        <div className="portfolio-grid">
                            {/* <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                                <CardTitle style={{color:'white', height:'200px', 
                                background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
                                    Personal Website
                                </CardTitle>
                                <CardText>(you're here now!)</CardText>
                                <CardActions border style={{textAlign:'center'}}>
                                    <Button colored>GitHub</Button>
                                    <Button colored>Devpost</Button>
                                    <Button colored>Live Demo</Button>
                                </CardActions>
                                <CardMenu style={{color:'white'}}>
                                    <IconButton name="share"/>
                                </CardMenu>
                            </Card> */}
                        </div>
                    </div>
                );
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({activeTab: tabID})} ripple>
                    <Tab className="tab" style={{color:'white'}}>Portfolio!</Tab>{/*0*/}
                    <Tab className="tab" style={{color:'white'}}>Frontend Web</Tab>{/*1*/}
                    <Tab className="tab" style={{color:'white'}}>Backend Web</Tab>{/*2*/}
                    <Tab className="tab" style={{color:'white'}}>M.L./A.I.</Tab>{/*3*/}
                    <Tab className="tab" style={{color:'white'}}>Android</Tab>{/*4*/}
                    <Tab className="tab" style={{color:'white'}}>IOS</Tab>{/*5*/}
                    <Tab className="tab" style={{color:'white'}}>Hardware</Tab>{/*6*/}
                    <Tab className="tab" style={{color:'white'}}>Big Data</Tab>{/*7*/}
                    <Tab className="tab" style={{color:'white'}}>Video Game Dev</Tab>{/*8*/}
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}
export default Portfolio;