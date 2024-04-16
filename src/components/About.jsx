import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
import { BsFillCircleFill } from 'react-icons/bs'

const About = () => {
    return (
        <div className='about-section-container' >
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="AboutBackground" />
            </div>
            <div className="about-section-background-container">
                <img src={AboutBackgroundImage} alt="AboutBackgroundImage" />
            </div>
            <div className="about-section-text-container">
                <p className='primary-subheading' >About</p>
                <h1 className='primary-heading' >
                    Food Is An Important Part Of A Balanced Diet
                </h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt
                    magna non et elit. Dolor  turpis molestie dui
                    magnis facilisis at fringilla quam. <br /><br />
                    Non tincidunt magna non et elit. Dolor turpis molestie
                    dui magnis facilisis at fringilla quam.
                </p>
                <div className="about-buttons-container">
                    
                </div>
            </div>
        </div>
    )
}

export default About