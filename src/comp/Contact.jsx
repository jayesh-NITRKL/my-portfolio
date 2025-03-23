import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <div>
    <section id="contact" className=" flex p-10 bg-yellow-100 text-black text-center space-x-4 justify-between">
      <div>
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="mt-2 font-light">Email : Jayeshsadafal97@gmail.com</p>
      </div>
      <div className="flex items-center mt-4 space-x-4 justify-center">
        
        <div className="flex flex-col items-center">
          <FaLinkedin className="text-3xl text-blue-600" />
          <a href="https://linkedin.com/in/jayesh-sadafal-a0120a324" className="text-lg">
            LinkedIn
          </a>
        </div>

        
        <div className="flex flex-col items-center">
          <FaGithub className="text-3xl text-black" />
          <a href="https://github.com/jayesh-NITRKL" className="text-lg">
            GitHub
          </a>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Contact
