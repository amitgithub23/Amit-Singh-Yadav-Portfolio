import React from 'react'
import mern from '../logosUsed/portfolio/mern.jpg'
import redux from '../logosUsed/portfolio/react redux.jpg'
import shopify from '../logosUsed/portfolio/shopify.jpg'
import bill from '../logosUsed/portfolio/bill.jpg'
import singapore from '../logosUsed/portfolio/singapore.jpg'
import buffet from '../logosUsed/portfolio/delicious buffet.png'
import boat from '../logosUsed/portfolio/boat.jpg'
import ac from '../logosUsed/portfolio/ac.jpg'
const Portfolio = () => {
  const portfolios =[
    {
     src : mern,
     code : 'https://github.com/amitgithub23/MERN-ProductManagement',
     netlify : "https://mern-react-node-express-mongodb.netlify.app/"
    },
    {
     src : redux,
     code : 'https://github.com/amitgithub23/Ecommerce',
     netlify : "https://redux-food-ecommerce.netlify.app/"
    },
    {
     src : shopify,
     code :"https://github.com/amitgithub23/React-Shopify",
     netlify : "https://react-frontend-shopify.netlify.app/"
    },
    {
     src : bill,
     code :" https://github.com/amitgithub23/electricity-bill",
     netlify : "https://electricty-bill.netlify.app/"
    },
    {
     src : singapore,
     code :" https://github.com/amitgithub23/Singapore-Tourism",
     netlify : "https://singapore-tourism.netlify.app/"
    },
    {
     src : buffet,
     code :" https://github.com/amitgithub23/Delicious-Buffet-Restaurant",
     netlify : "https://delicious-buffet-restaurant.netlify.app/"
    },
    {
     src : boat,
     code :" https://github.com/amitgithub23/Boat-Ride-Bill-Automation",
     netlify : "https://boat-ride-bill-automation.netlify.app/"
    },
    {
     src : ac,
     code :"https://github.com/amitgithub23/AcMaintenance ",
     netlify : "https://ac-maintenance-services.netlify.app/"
    }
  ]
  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto">
      <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
            <p className="py-6">Chech out some my work right here</p>
        </div>
       
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
          portfolios.map(({src,code,netlify},i)=>{
            return (
              <div key={i} className="shadow-md shadow-gray-600 rounded-lg">
              <div>

              <img src={src} alt=""  className="rounded-md duration-200 hover:scale-105" />
              </div>
              <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> <a href={code} target="_blank" rel="noopener noreferrer">Code</a></button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> <a href={netlify} target="_blank" rel="noopener noreferrer">Netlify</a></button>
              </div>
          </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
