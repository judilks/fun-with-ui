import React, { Component } from 'react';
import logo from "../billsface.png";
import './Bio.css';


class Bio extends Component {

    render() {
        return (
            <div className="container">
                <h1> Justin Dilks </h1>
                <img src={logo} alt="bill's face" className="billsface"/>
                <p>Howdy pardner!</p>
                <h2>Contact Info</h2>
                <ul>
                    <li><a href="judilks@gmail.com">judilks@gmail.com</a></li>
                    <li><a href="github.com/judilks">github.com/judilks</a></li>
                    <li><a href="billsface">coming soon..</a></li>
                </ul>
            </div>
        )
    }

    

}

export default Bio;