import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const SocialLinks = () => {
    const links =[
        {
            child:(
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href : 'https://www.linkedin.com/in/amit-singh-yadav-85197920b/',
           style : "rounded-tr-md"
        },
        {
            child:(
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href : 'https://github.com/amitgithub23?tab=repositories',
        
        },
        {
            child:(
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href : "mailto:amits7875@gmail.com",
       
        },
        {
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href : '/amit resume (1).pdf',
           style : "rounded-br-md",
           download : true,

        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {
            links.map(({child,href,style,download},i)=>{
                return ( <li key={i}
                 className={
                    "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 hover:rounded-md hover:ml-[-10px] duration-300 ml-[-100px]" + 
                    " " +
                     style
                }
                 >
            <a href={href} 
            className='flex justify-between items-center w-full text-white'
            download={download}
            target='_blank'
            rel="noreferrer" 
            >
                <>
               {child}
                </>

            </a>
        </li>)
            })
        }
        
      </ul>
    </div>
  )
}

export default SocialLinks
