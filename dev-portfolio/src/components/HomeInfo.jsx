import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({ link, btnText, showGreeting = true }) => (
  <Link to={link}>
    <div className = "info-box">
    {showGreeting && "hi! 👋🏼"}
      <p className="blue-gradient_text">
        {btnText}
      </p>
    </div>
  </Link>
)

const renderContent = {
    // 1: (
    // <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-white rounded-xl py-4 px-4 text-gray mx-5">
    //     hi! 👋🏼 i'm <span className="font-semibold">remo</span>
    // </h1>
    // ),
    1: (
    <InfoBox 
      link="/about" 
      btnText="i'm remo"
      showGreeting ={true}
    />
    ),
    2: (
    <InfoBox 
      link="/about" 
      btnText="i like to create."
      showGreeting ={false}
    />
    ),
    3: (
    <InfoBox 
      link="/projects" 
      btnText="click me to view some of my work!"
      showGreeting ={false}
    />
    ),
    4: (
    <InfoBox 
      link="/contact" 
      btnText="what can i do for you?"
      showGreeting ={false}
    />
    )
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo