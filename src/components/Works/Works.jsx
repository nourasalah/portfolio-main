    import React from 'react'
    import './Works.css'
    import Upwork from "../../img/Upwork.png";
    import Fiverr from "../../img/fiverr.png";
    import Amazon from "../../img/amazon.png";
    import Shopify from "../../img/Shopify.png";
    import Facebook from "../../img/Facebook.png";
    export const Works = () => {
    return (
        <div className='works'>
        <div className="awsome">
        <span>Works For All These</span>
        <span>Brands & Clients</span>
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
            Hic at molestiae cumque? Porro, atque nesciunt.
            <br/>Lorem ipsum dolor sit amet consectetur.
            <br/>Lorem ipsum dolor sit amet consectetur.
            <br/>Lorem ipsum dolor sit amet consectetur.

            </span>
    <button className="button s-button"> Hire Me</button>
    </div>
    <div className="w-right">
            <div className='w-mainCircle'>
            <div className="w-secCircle">
                <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt="" />
            </div>{" "}
            <div className="w-secCircle">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
            </div>
            </div>
             {/* background Circles */}
        
    </div>
    )
    }
