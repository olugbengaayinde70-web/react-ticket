import React from 'react'

function Firstbody({ showBookings, setShowBookings }) {
  const handleBookClick = () => {
    setShowBookings(true)
    setTimeout(() => {
      const bookingsSection = document.getElementById('bookings')
      if (bookingsSection) {
        bookingsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div id='home' className='w-full bg-sky-500 py-12 md:py-20 px-4 leaf'>
        <div className='max-w-2xl'>
            <div className='h-32 md:h-48 w-full'></div>
            <div className='py-6 md:py-10 text-3xl md:text-5xl font-extrabold'>Welcome to Lagos TechCon</div>
            <div className='py-6 md:py-10 text-base md:text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint dolorem dicta quia. Rem sed reprehenderit atque possimus incidunt corporis id harum quasi quidem aperiam ullam iure, porro aut nesciunt exercitationem.</div>
            <div className='py-6 md:py-10'>
                <button 
                  onClick={handleBookClick}
                  className='group relative h-14 md:h-16 px-6 md:px-12 rounded-3xl bg-sky-400 text-lg md:text-2xl font-bold text-amber-50 cursor-pointer overflow-hidden transition-all duration-300 hover:bg-amber-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.7)]'
                >
                  
                  <span className="absolute inset-0 bg-amber-400 rounded-3xl scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-70 transition-all duration-500 ease-out"></span>
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-amber-300 rounded-full group-hover:w-[200%] group-hover:h-[200%] opacity-0 group-hover:opacity-50 transition-all duration-400 ease-out"></span>
                  
                  
                  <span className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-lg">
                    Book your ticket now →
                  </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Firstbody
