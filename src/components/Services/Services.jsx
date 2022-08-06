import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import NouraSalah from './NouraSalah.pdf'
const Services = () => {
  return (
    <div className='Services'>
        {/* left side */}
        <div className="awsome">
            <span>My Awsome</span>
            <span>Services</span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
                Hic at molestiae cumque? Porro, atque nesciunt.</span>
          <button className="button s-button">Download CV</button>
        </div>
        {/* right side */}
        <div className="cards">
        <div style={{left:'14rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={'Adobe, Adobe xd, Figma, Sketch, illustrator'}


            />
            
        </div>
        <div style={{top:'12rem', left:'-4rem'}}>
          <Card
          emoji={Glasses}
          heading={'Developer'}
          detail={'Html, Css, Js , ReactJs, Bootstrap, Github'}

          />
        </div>
        <div style={{top:'19rem' , left:'12rem'}}>
          <Card
          emoji={Humble}
          heading={'Ui/Ux'}
          detail={
            'lorem l klaks kjfdkfj  klsfjkd '
          }
          />
        </div>
        </div>
    </div>
  )
}

export default Services