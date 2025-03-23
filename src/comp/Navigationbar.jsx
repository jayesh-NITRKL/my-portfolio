import React from 'react'

function Navigationbar() {
  return (
    <>
      <nav className='bg-orange-900 text-white p-4 flex justify-between'>
        <h1 className='text-xl font-bold'> -- MY PORTFOLIO--</h1>
        <div className='space-x-4'>
          <a href="#Homesection">Home</a>
          <a href="#Aboutsection">About</a>
          <a href="#Projectsection">Projects</a>
          <a href="#Skillsection">Skills</a>
          <a href="#Contactsection">Contact</a>
        </div>
      </nav>
    </>
  )
}

export default Navigationbar