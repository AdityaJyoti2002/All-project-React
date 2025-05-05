import React from 'react';
import './membership.css';
import logo from "./2.png";
import image10 from "./image 10.png"
import image11 from "./image 11.png"
import image12 from "./image 12.png"
import image13 from "./image 13.png"
import image14 from "./image 14.png"


// import { Link } from 'react-router-dom';

function Membership() {
    return(
        <div className="container">
        <img src={logo} alt=""/>
        <h3>Get Zephyra membership today</h3>

    
        <div className="cardbox">
            <div className="card" style={{backgroundColor: "#EA8ACD"}}>
                <img src={image12} alt=""/>
                <h2>Get early access 
                    to deals</h2>
            </div>
            <div className="card" style={{backgroundColor: "#C17BD9"}}>
                <img src={image14} alt=""/>
                <h2>Get personalized
                    recommendations</h2>
            </div>
            <div className="card" style={{backgroundColor:" #9D8EF1"}}>
                <img src={image10} alt=""/>
                <h2>Get access to special
                    zephrya discount</h2>
            </div>
            <div className="card" style={{ backgroundColor:" #745CFD"}}>
                <img src={image13} alt=""/>
                <h2>Exclusive access to 
                    items and zephyra 
                    events</h2>
            </div>
            <div className="card" style={{ backgroundColor: '#8AD8EA' }}>
                <img src={image11} alt=""/>
                <h2>Virtual fitting 
                    Discovery</h2>
            </div>
        </div>
        <a href="">Apply now</a>
    </div>
        
        
    )
}

export default Membership