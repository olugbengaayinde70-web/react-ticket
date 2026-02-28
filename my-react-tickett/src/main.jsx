import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Top from './Top'
import Firstbody from './Firstbody'
import Events from './Events'
import Bookings from './Bookings'
import Confirmation from './Confirmation'
import Time from './Time'
import Contact from './Contact'

function App() {
  const [bookingData, setBookingData] = useState(null)
  const [showBookings, setShowBookings] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleBookingSubmit = (data) => {
    setBookingData(data)
  }

  const handleBackToBooking = () => {
    setBookingData(null)
  }

  const handleShowBookings = () => {
    setShowBookings(true)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Top darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Firstbody showBookings={showBookings} setShowBookings={setShowBookings} darkMode={darkMode} />
      <Events darkMode={darkMode} />
      {showBookings && <Bookings onSubmit={handleBookingSubmit} darkMode={darkMode} />}
      {bookingData && <Confirmation bookingData={bookingData} onBack={handleBackToBooking} darkMode={darkMode} />}
      <Contact darkMode={darkMode} />
      <Time darkMode={darkMode} />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
