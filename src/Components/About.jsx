import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div  className='pb-8'>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            <div>
                <p className="text-xl mt-20 ">As a fresher in MERN Stack , I possess a strong foundation in web development using the MERN Stack (MongoDB, Express.js, React.js, Node.js) technology.</p>
            </div>
            <br />
            <p className="text-xl ">
            I have a keen eye to analyze details and a passion for creating user-friendly experiences. I am always eager to contribute my skills and learn from experienced professionals in a collaborative environment.
            </p>
        </div>
      </div>
    </div>
  )
}

export default About
