import React, { useState, useEffect } from 'react'

function Top({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? (darkMode ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl' : 'bg-sky-400/95 backdrop-blur-md shadow-2xl shadow-sky-900/30') : (darkMode ? 'bg-gray-900' : 'bg-sky-400')}`}>
      <div className="flex items-center justify-between p-2.5 md:p-0 md:h-[100px] max-w-7xl mx-auto">
        {/* Logo with cool animation */}
        <div className='flex items-center text-2xl md:text-3xl font-extrabold md:w-[50%] md:h-[100px] md:justify-start md:ml-4 group cursor-pointer'>
          <div className={`h-[50px] w-[50px] bg-amber-500 mr-1.5 rounded-xl flex items-center justify-center text-xl md:text-2xl text-amber-50 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.8)] transition-all duration-300 ${darkMode ? 'shadow-amber-500/50' : ''}`}>T</div>
          <span className={`hidden sm:inline bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${darkMode ? 'from-amber-400 to-amber-200 group-hover:from-white group-hover:to-gray-300' : 'from-gray-800 to-gray-600 group-hover:from-amber-500 group-hover:to-amber-300'}`}>TechCon Lagos 2026</span>
          <span className={`sm:hidden bg-gradient-to-r bg-clip-text text-transparent ${darkMode ? 'from-amber-400 to-amber-200' : 'from-gray-800 to-gray-600'}`}>TechCon</span>
        </div>

        {/* Desktop Navigation with cool effects */}
        <div className='hidden md:flex items-center justify-center gap-6 text-xl font-serif md:w-[50%] md:h-[100px]'>
          <a href="#home" className={`relative px-4 py-2 transition-all duration-300 group ${darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-white'}`}>
            <span className="relative z-10 group-hover:tracking-wider">Home</span>
            <span className="absolute inset-0 bg-amber-500 rounded-lg transform scale-0 group-hover:scale-100 transition-all duration-300 -z-0"></span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#events" className={`relative px-4 py-2 transition-all duration-300 group ${darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-white'}`}>
            <span className="relative z-10 group-hover:tracking-wider">Events</span>
            <span className="absolute inset-0 bg-amber-500 rounded-lg transform scale-0 group-hover:scale-100 transition-all duration-300 -z-0"></span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#bookings" className={`relative px-4 py-2 transition-all duration-300 group ${darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-white'}`}>
            <span className="relative z-10 group-hover:tracking-wider">Bookings</span>
            <span className="absolute inset-0 bg-amber-500 rounded-lg transform scale-0 group-hover:scale-100 transition-all duration-300 -z-0"></span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className={`relative px-4 py-2 transition-all duration-300 group ${darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-white'}`}>
            <span className="relative z-10 group-hover:tracking-wider">Contact</span>
            <span className="absolute inset-0 bg-amber-500 rounded-lg transform scale-0 group-hover:scale-100 transition-all duration-300 -z-0"></span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/* Dark Mode Toggle Button - Desktop only */}
        <button
          onClick={toggleDarkMode}
          className={`hidden md:block mr-4 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 ${darkMode ? 'bg-amber-500 text-white hover:bg-amber-400' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
          aria-label='Toggle dark mode'
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Mobile Menu Button with animation */}
        <button 
          onClick={toggleMenu}
          className='md:hidden flex flex-col gap-1.5 cursor-pointer p-2'
          aria-label='Toggle menu'
        >
          <div className={`w-7 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-800'} transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-8'}`}></div>
          <div className={`w-7 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-800'} transition-all duration-300 ${menuOpen ? 'opacity-0' : 'group-hover:w-5'}`}></div>
          <div className={`w-7 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-800'} transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-8'}`}></div>
        </button>
      </div>

      {/* Mobile Navigation Menu with slide animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`flex flex-col gap-1 p-4 shadow-inner ${darkMode ? 'bg-gray-900/98' : 'bg-sky-400/98'} backdrop-blur-sm`}>
          <a href="#home" className={`text-lg font-serif py-3 px-4 rounded-lg transition-all duration-300 ${darkMode ? 'text-gray-200 hover:text-white hover:bg-gray-800' : 'text-gray-800 hover:text-white hover:bg-amber-500/30'} hover:pl-6`} onClick={handleNavClick}>Home</a>
          <a href="#events" className={`text-lg font-serif py-3 px-4 rounded-lg transition-all duration-300 ${darkMode ? 'text-gray-200 hover:text-white hover:bg-gray-800' : 'text-gray-800 hover:text-white hover:bg-amber-500/30'} hover:pl-6`} onClick={handleNavClick}>Events</a>
          <a href="#bookings" className={`text-lg font-serif py-3 px-4 rounded-lg transition-all duration-300 ${darkMode ? 'text-gray-200 hover:text-white hover:bg-gray-800' : 'text-gray-800 hover:text-white hover:bg-amber-500/30'} hover:pl-6`} onClick={handleNavClick}>Bookings</a>
          <a href="#contact" className={`text-lg font-serif py-3 px-4 rounded-lg transition-all duration-300 ${darkMode ? 'text-gray-200 hover:text-white hover:bg-gray-800' : 'text-gray-800 hover:text-white hover:bg-amber-500/30'} hover:pl-6`} onClick={handleNavClick}>Contact</a>
          
          {/* Dark Mode Toggle - Mobile only */}
          <button
            onClick={toggleDarkMode}
            className={`flex items-center justify-center gap-2 text-lg font-serif py-3 px-4 rounded-lg transition-all duration-300 mt-2 ${darkMode ? 'text-gray-200 hover:text-white hover:bg-gray-800' : 'text-gray-800 hover:text-white hover:bg-amber-500/30'}`}
          >
            <span>{darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Top
