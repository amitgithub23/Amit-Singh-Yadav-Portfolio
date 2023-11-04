import React from 'react'


const Contact = () => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleContact = async(event)=>{
    event.preventDefault();
    console.log(name,email,message);
    if(name && email && message){ 
    const rgExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,10})$/
    if(rgExp.test(email)){
    // let result = await fetch("https://amit-singh-yadav-portfolio-api.onrender.com/contact",{
    //   method:"post",
    //  body: JSON.stringify({name,email,message}),
    //  headers:{
    //   "Content-Type" : "application/json"
    //  }
    // });
    // if(result){
    //   alert(`Hi ${name.toUpperCase()}, Thank you for your time`);
    // }
    alert(`Hi ${name.toUpperCase()}, Thank you for your time`);
  }
    else{
      alert("Please Enter Valid Email")
    }}
    else{
      alert("Please fill all the details")
    }
  }
  return (
   
    <div name='contact' className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"> 
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
            <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/1a3b1483-675d-4774-921e-e0afd804db40"  method="POST"   className="flex flex-col w-full md:w-1/2 ">
                <input type='text' name='name' placeholder='Enter your name'
                onChange={(e)=>setName(e.target.value)}
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                <input name='email' 
                placeholder='Enter your email'
                onChange={(e)=>setEmail(e.target.value)}
                className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                <textarea name='message' 
                rows="10" 
                placeholder='Enter your message'
                onChange={(e)=>setMessage(e.target.value)}
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                <button type="submit"  className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto items-center rounded-md hover:scale-105 duration-300" >Let's Talk</button>
            </form>
        </div>
      </div>
    </div>
  
  )
}

export default Contact
