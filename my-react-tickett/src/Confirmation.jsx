import React from 'react'

function Confirmation({ bookingData, onBack, darkMode }) {
  if (!bookingData) {
    return null
  }

  const totalAmount = bookingData.quantity * bookingData.pricePerTicket

  const handleDownload = () => {
    alert('Downloading ticket...')
  }

  const handleHome = () => {
    if (onBack) {
      onBack()
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center p-4 py-8 ${darkMode ? 'bg-gray-800' : 'bg-sky-300'}`}>
      <div className={`rounded-2xl shadow-lg p-4 md:p-8 max-w-2xl w-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
        {/* Success Message */}
        <div className='text-center mb-8'>
          <h1 className='text-2xl md:text-4xl font-extrabold text-green-600 mb-2'>Booking Successful!</h1>
          <p className={`text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Thank you for your booking. Here's your confirmation details.</p>
        </div>

        {/* Confirmation Details */}
        <div className={`border-2 rounded-lg p-4 md:p-6 mb-6 transition-all duration-300 hover:shadow-lg ${darkMode ? 'border-gray-600' : 'border-sky-500'} ${darkMode ? 'hover:border-gray-500' : 'hover:border-sky-400'}`}>
          <h2 className={`text-xl md:text-2xl font-bold mb-6 ${darkMode ? 'text-amber-400' : 'text-sky-600'}`}>Booking Summary</h2>
          
          {/* Grid for booking details */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4'>
            <div className={`transition-all duration-300 p-2 rounded-lg ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-sky-50'}`}>
              <p className={`text-xs md:text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Event Name</p>
              <p className={`text-base md:text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>{bookingData.eventName}</p>
            </div>
            <div className={`transition-all duration-300 p-2 rounded-lg ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-sky-50'}`}>
              <p className={`text-xs md:text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Ticket Type</p>
              <p className={`text-base md:text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>{bookingData.ticketType}</p>
            </div>
            <div className={`transition-all duration-300 p-2 rounded-lg ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-sky-50'}`}>
              <p className={`text-xs md:text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Quantity</p>
              <p className={`text-base md:text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>{bookingData.quantity} ticket(s)</p>
            </div>
            <div className={`transition-all duration-300 p-2 rounded-lg ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-sky-50'}`}>
              <p className={`text-xs md:text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Price per Ticket</p>
              <p className={`text-base md:text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>₦{bookingData.pricePerTicket.toLocaleString()}</p>
            </div>
          </div>

          {/* Total Amount */}
          <div className={`rounded-lg p-4 mb-6 border-l-4 transition-all duration-300 hover:scale-[1.02] ${darkMode ? 'bg-gray-600 border-gray-500 hover:bg-gray-500' : 'bg-sky-100 border-sky-600 hover:bg-sky-200'}`}>
            <p className={`text-xs md:text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Amount</p>
            <p className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-amber-400' : 'text-sky-600'}`}>₦{totalAmount.toLocaleString()}</p>
          </div>

          {/* Attendee Information */}
          <div className={`border-t-2 pt-6 ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
            <h3 className={`text-lg md:text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Attendee Information</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
              <div className={`transition-all duration-300 p-2 rounded-lg ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-sky-50'}`}>
                <p className={`text-xs md:text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Full Name</p>
                <p className={`text-base md:text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>{bookingData.userName}</p>
              </div>
              <div className={`transition-all duration-300 p-2 rounded-lg ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-sky-50'}`}>
                <p className={`text-xs md:text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                <p className={`text-base md:text-lg break-all ${darkMode ? 'text-white' : 'text-gray-800'}`}>{bookingData.userEmail}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col md:flex-row gap-4 justify-center'>
          {/* <button 
            onClick={handleDownload}
            className='bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-95 w-full md:w-auto'
          >
            Download Ticket
          </button> */}
          <button 
            onClick={handleHome}
            className='bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] active:scale-95 w-full md:w-auto'
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Confirmation
