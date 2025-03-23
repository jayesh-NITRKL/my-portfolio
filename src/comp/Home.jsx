import React from 'react'

function Home() {
  return (
    <div>
      <section className='bg-orange-100 h-screen flex flex-row items-center justify-center space-x-10 p-10'>
        
        <div  className='text-center md:text-left'>
        <h1 className='text-5xl font-bold'>Hello , I'm Jayesh Sadafal.</h1>
        <p className='text-xl ml-4 '>I am a passionate developer</p>
        </div>

        <div className='w-60 h-60 overflow-hidden mt-4'>
          <img src='/your-image.jpg' className='w-full h-full object-cover' />
        </div>
      </section>
    </div>
  )
}

export default Home
