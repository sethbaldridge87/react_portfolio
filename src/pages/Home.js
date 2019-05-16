import React from 'react';
import Skills from '../assets/skills.json';
import Projects from '../assets/projects.json';

function Home() {
    const skills = Skills;
    return (
        <div>
            <div className="parallax-container">
                <div className="parallax">
                    <img src="images/background7.jpg" alt="portrait" />
                </div>
                <div id="img_greeter" className="container">
                    <h1>Welcome to My Corner of the Web!</h1>
                </div>
                
            </div>
            <div className="section white">
                <div className="row container">
                    <div className="col s12 m5 l4 center-align">
                        <img id="circle_portrait" src="images/circle_portrait.png" alt="Circle Portrait" />
                    </div>
                    <div className="col s12 m7 l8">
                        <h2 className="header">Hello!</h2>
                        <p className="grey-text text-darken-3 lighten-3">My name is Seth! I am a web developer with 2+ years of experience creating front-end and back-end applications using modern coding languages. My current employer's website has seen increased traffic through SEO improvements, generating interactive apps, and more dynamic presentation.</p>
                    </div>
                </div>
            </div>
            <div className="section" id="section2">
                <div className="row container">
                    <h2>My Skills Include:</h2>
                    <div>
                        {skills.skills_array.map(data => (
                            <div className="col l2 m3 s4"><h5>{data}</h5></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="section white" id="section3">
                <div className="row">
                    <h2>Projects</h2>
                </div>
                <div className="row container">
                    <div className="col l4 s12">
                        <h4>{Projects[11].name}</h4>
                        <p>{Projects[11].description}</p>
                        <p>{(Projects[11].technologies || []).join(", ")}</p>
                        <a href={Projects[11].repo}><p>Link to repo:</p></a>
                        <a href={Projects[11].link}><p>Deployed link:</p></a>
                    </div>
                    <div className="col l4 s12">
                        <h4>{Projects[8].name}</h4>
                        <p>{Projects[8].description}</p>
                        <p>{(Projects[8].technologies || []).join(", ")}</p>
                        <a href={Projects[8].repo}><p>Link to repo:</p></a>
                        <a href={Projects[8].link}><p>Deployed link:</p></a>
                    </div>
                    <div className="col l4 s12">
                        <h4>{Projects[6].name}</h4>
                        <p>{Projects[6].description}</p>
                        <p>{(Projects[6].technologies || []).join(", ")}</p>
                        <a href={Projects[6].repo}><p>Link to repo:</p></a>
                        <a href={Projects[6].link}><p>Deployed link:</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;