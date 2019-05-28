import React from 'react';

function About() {
    return (
        <div className="white container-fluid" id="about_section">
            <h1>About Page</h1>
            <hr />
            <div className="row container">
                <div className="col l9 m6 s12">
                    <p>My name’s Seth Baldridge, and I am a problem solver. I love to approach a problem, figure out steps to solve it, and execute those steps. And if I don’t know how to climb one of those steps, it just means I have an opportunity to learn something new.</p>
			        <p>I have a certificate in web programming from Salt Lake Community College, and I will soon have a certificate in web development from the University of Utah. I’ve been working as a Web Developer for almost two years, and I’m ready to look for my next challenge. I especially enjoy working with Javascript, jQuery, and Bootstrap.</p>
			        <p>Most of my experience is in Front End with some Back End, but I’m looking for a position that will help me grow and advance. My goal is to become experienced enough to act as a complete Full-Stack Developer.</p>
                </div>
                <div className="col l3 m6 s12 center-align">
                    <img src="images/portrait.jpg" alt="about_portrait" />
                </div>
            </div>
        </div>
    )
}

export default About;