import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
     return (
       <div className="ma4 mt0">
        <Tilt 
             className="tilt-background parallax-effect" 
             perspective={500} 
             scale={1.15} transitionSpeed={2500}
             style={{ height: '150px', width: '150px'}}
        >
        <div className="br2 shadow-2" style={{ height: '150px', width: '150px' }}>
            <div className="pa3">
                <img style={{paddingTop:'10px'}} src={brain} alt='logo'/></div>
        </div>
        </Tilt>
       </div>
    )
}

export default Logo;