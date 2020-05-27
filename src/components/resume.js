import React, { Component } from 'react';
import { Card, CardText, CardActions, Button } from 'react-mdl';

class Resume extends Component {
    render() {
        return(
            <div className="resume-body">
                <h2>Experience</h2>
                <Card shadow={5} className='card'>
                        <CardText style={{textAlign:'center', marginTop:'1em'}}>
                        For a quick glance at my skills, please view my resume!
                        For more details about what I did and to see other experiences not listed on my resume, 
                        please visit my LinkedIn! <br/>
                        An full experience timeline will be coming out shortly here! 
                    </CardText>
                    <CardActions border style={{textAlign:'center'}}>
                        {/* <Button colored ><a href="../pdfs/resume.pdf" target="_blank">Resume</a></Button> */}
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a href="https://drive.google.com/file/d/128ObOeUXcias1_ObDrlnLbIaXbPRXWBG/view?usp=sharing" target="_blank"><Button colored >Resume</Button></a>
                        <Button colored href="https://linkedin.com/in/bill-lliu" target="_blank">LinkedIn</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
export default Resume;