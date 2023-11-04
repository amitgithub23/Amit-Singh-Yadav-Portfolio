import React from 'react'
import html from '../logosUsed/html.png'
import css from '../logosUsed/css.png'
import github from '../logosUsed/github.png'
import tailwind from '../logosUsed/tailwind.png'
import node from '../logosUsed/node.png'
import react from '../logosUsed/react.png'
const Skills = () => {
    const skills = [
        //differentr styles to get color according to logo color during hover
        {
            src: html,
            title : "HTML",
           style: "shadow-orange-500"
        },
        {
            src: css,
            title : "CSS",
           style: "shadow-blue-500"
        },
        {
            src: github,
            title : "GitHub",
           style: "shadow-gray-500"
        },
        {
            src: tailwind,
            title : "Tailwind",
           style: "shadow-sky-500"
        },
        {
            src: node,
            title : "NODE",
           style: "shadow-green-500"
        },
        {
            src: react,
            title : "React",
           style: "shadow-blue-400"
        },
    ]
  return (
    <div name="skills" className="bg-gradient-to-b from-gray-800 to-black
    w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 inline ">Skills</p>
                <p className="py-6">These are the technologies I've worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {
                    skills.map(({src, title, style}, i)=>{
                        return (
                            <div className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg"+
                            " "+
                            style}>
                            <img src={src} alt="" className="w-20 mx-auto"/>
                            <p className="mt-4">{title} </p>
                        </div>
                        )

                    })
                }
              
            </div>
        </div>
      
    </div>
  )
}

export default Skills
