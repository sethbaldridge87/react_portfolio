import React from 'react';

function TopNav() {
    return (
<div>
    <ul id="dropdown1" className="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li className="divider"></li>
        <li><a href="#!">three</a></li>
    </ul>
    <ul id="dropdown2" className="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li className="divider"></li>
        <li><a href="#!">three</a></li>
    </ul>
    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">Seth's Web</a>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/history">Work History</a></li>
                <li><a href="/references">References</a></li>
                <li>
                    <a className="dropdown-trigger" href="#!" data-target="dropdown1">Portfolio<i className="material-icons right">arrow_drop_down</i></a>
                </li>
                <li><a href="/contact">Contact Me</a></li>
                <li><a href="/resume.pdf">Resume (pdf download)</a></li>
            </ul>
        </div>
    </nav>
    <ul className="sidenav" id="mobile-demo">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/history">Work History</a></li>
        <li><a href="/references">References</a></li>
        <li><a className="dropdown-trigger" href="#!" data-target="dropdown2">Portfolio<i className="material-icons right">arrow_drop_down</i></a></li>
        <li><a href="/contact">Contact Me</a></li>
        <li><a href="/resume.pdf">Resume (pdf download)</a></li>
    </ul>
</div>
    )
}

export default TopNav;