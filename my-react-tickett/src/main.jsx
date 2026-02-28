import { StrictMode, useState } from 'react'
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
    <>
      <Top />
      <Firstbody showBookings={showBookings} setShowBookings={setShowBookings} />
      <Events />
      {showBookings && <Bookings onSubmit={handleBookingSubmit} />}
      {bookingData && <Confirmation bookingData={bookingData} onBack={handleBackToBooking} />}
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Contact />
    <Time />
  </StrictMode>,
)
