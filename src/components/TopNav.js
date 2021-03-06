import React from 'react';

function TopNav() {
    return (
<div>
    <ul id="dropdown1" className="dropdown-content">
        <li><a href="https://github.com/sethbaldridge87">My GitHub</a></li>
        <li><a href="www.hydroblaster.com">Hydroblaster.com</a></li>
    </ul>
    <ul id="dropdown2" className="dropdown-content">
        <li><a href="https://github.com/sethbaldridge87">My GitHub</a></li>
        <li><a href="www.hydroblaster.com">Hydroblaster.com</a></li>
    </ul>
    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">Seth's Web</a>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/about">About</a></li>
                <li><a href="/education">Education</a></li>
                <li><a href="/history">Work History</a></li>
                <li><a href="/references">References</a></li>
                <li>
                    <a className="dropdown-trigger" href="#!" data-target="dropdown1">Portfolio<i className="material-icons right">arrow_drop_down</i></a>
                </li>
                <li><a href="sethbaldridge_resume.pdf" download>Resume (pdf)</a></li>
                <li><a href="mailto:sethbaldridge87@gmail.com">sethbaldridge87@gmail.com</a></li>
            </ul>
        </div>
    </nav>
    <ul className="sidenav" id="mobile-demo">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/education">Education</a></li>
        <li><a href="/history">Work History</a></li>
        <li><a href="/references">References</a></li>
        <li><a className="dropdown-trigger" href="#!" data-target="dropdown2">Portfolio<i className="material-icons right">arrow_drop_down</i></a></li>
        <li><a href="sethbaldridge_resume.pdf" download>Resume (pdf)</a></li>
        <li><a href="mailto:sethbaldridge87@gmail.com">sethbaldridge87@gmail.com</a></li>
    </ul>
</div>
    )
}

export default TopNav;