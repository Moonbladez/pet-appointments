import React from "react"


export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper indigo darken-1">
                <a href="/" className="brand-logo">Pawsome Pets</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Link</a></li>
                    <li><a href="/">Link</a></li>
                    <li><a href="/">Link</a></li>
                </ul>
            </div>
        </nav>
    )
}