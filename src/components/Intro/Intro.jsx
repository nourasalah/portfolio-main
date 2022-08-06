import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import LinkedIn from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

export const Intro = () => {
  return (
<div className="intro">
    <div className="i-left">
        <div className="i-name">
            <span>HY! I Am </span>
            <span>Noura Salah</span>
            <span>Front-end develper with good level of experience in web development  </span>
        </div>
        <div className="i-button button">Hire Me</div>
        <div className="i-icons">
            <img src={Github} alt="" />
            <img src={Instagram} alt="" />
            <img src={LinkedIn} alt="" />
        </div>
    </div>
    <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" /> 
        <img src={glassesimoji} alt="" />
        <div style={{top:'-4%', left:'68%'}}>
            <FloatingDiv image={crown} txt1='web' txt2='developer'/>
        </div>
        <div style={{top:'18rem', left:'0rem'}}>
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
        </div>
        <div>
            {/* <div className="blur" style={{background: 'rgb(238 210 255)'}}></div>
            <div className="blur" style={{background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem"}}></div> */}
        </div>
    </div>
</div>  )
}
