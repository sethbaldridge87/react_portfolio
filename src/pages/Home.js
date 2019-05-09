import React from 'react';
import Skills from '../assets/skills.json';

function Home() {
    const skills = Skills;
    return (
        <div>
            <div className="parallax-container">
                <div className="parallax">
                    <img src="http://sethsweb.com/images/background7.jpg" alt="portrait" />
                </div>
                <div id="img_greeter" className="container">
                    <h1>Welcome to My Corner of the Web!</h1>
                </div>
                
            </div>
            <div className="section white">
                <div className="row container">
                    <div className="col l3">
                        <img id="circle_portrait" src="http://sethsweb.com/images/circle_portrait.png" alt="Circle Portrait" />
                    </div>
                    <div className="col l9">
                        <h2 className="header">Hello!</h2>
                        <p className="grey-text text-darken-3 lighten-3">My name is Seth! I am a web developer with 2+ years of experience creating front-end and back-end applications using modern coding languages. My current employer's website has seen increased traffic through SEO improvements, generating interactive apps, and more dynamic presentation.</p>
                    </div>
                </div>
                
            </div>
            <div className="section rgb(78, 78, 78);" id="section2">
                <div className="row container">
                    <h2>My Skills Include:</h2>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;