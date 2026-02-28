import React, { useState } from 'react'

function Bookings({ onSubmit, darkMode }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  })

  const tickets = [
    { name: 'Students', price: 8000, features: ['Main stage access', 'Networking Lounge', 'Digital Swag Bag'] },
    { name: 'Regular', price: 15000, features: ['Priority Seating', 'Exclusive Workshops', 'Lunch and refreshment', 'VIP lounge'] },
    { name: 'VIP Ticket', price: 40000, features: ['ALL VIP benefits', 'After-party Access', 'Front Row seats'] }
  ]

  const incrementQuantity = () => setQuantity(Math.min(quantity + 1, 10))
  const decrementQuantity = () => setQuantity(Math.max(quantity - 1, 1))

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedTicket) {
      alert('Please select a ticket type')
      return
    }
    
    const selectedTicketData = tickets.find(t => t.name === selectedTicket)
    const bookingInfo = {
      eventName: 'Fast Tech Innovations 2026',
      ticketType: selectedTicket,
      quantity: quantity,
      pricePerTicket: selectedTicketData.price,
      userName: formData.fullName,
      userEmail: formData.email,
      userPhone: formData.phone
    }
    
    if (onSubmit) {
      onSubmit(bookingInfo)
    }
    
    setFormData({ fullName: '', email: '', phone: '' })
    setSelectedTicket(null)
    setQuantity(1)
  }

  return (
    <div id='bookings' className={`w-full py-8 md:py-12 px-4 ${darkMode ? 'bg-gray-600' : 'bg-sky-300'}`}>
      <div className={`flex items-center justify-center text-3xl md:text-4xl font-extrabold mb-4 ${darkMode ? 'text-white' : ''}`}>Bookings and Tickets</div>
      <div className={`text-xl md:text-3xl font-mono font-extrabold mb-4 ${darkMode ? 'text-gray-200' : ''}`}>Secure your spot</div>
      <div className={`text-lg md:text-2xl font-bold mb-6 ${darkMode ? 'text-gray-300' : ''}`}>Select ticket type</div>
      
      {/* Ticket Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
        {tickets.map((ticket, idx) => (
          <div 
            key={idx}
            onClick={() => setSelectedTicket(ticket.name)}
            className={`rounded-xl p-4 md:p-6 flex flex-col cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] ${selectedTicket === ticket.name ? 'ring-2 ring-green-500 shadow-lg' : ''} ${darkMode ? 'bg-gray-700 hover:bg-gray-500' : 'bg-sky-500 hover:bg-amber-100'}`}
          >
            <div className={`text-xl md:text-2xl font-extrabold mb-2 ${darkMode ? 'text-white' : ''}`}>{ticket.name}</div>
            <div className={`font-semibold mb-2 ${darkMode ? 'text-gray-300' : ''}`}>₦{ticket.price.toLocaleString()}</div>
            <div className='flex flex-wrap gap-2 mb-4'>
              {ticket.features.map((feature, i) => (
                <div key={i} className={`h-8 md:h-9 rounded-xl flex items-center justify-center text-xs md:text-sm px-2 transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-sky-300 hover:bg-sky-500 text-amber-50'}`}>
                  {feature}
                </div>
              ))}
            </div>
            <input type="checkbox" checked={selectedTicket === ticket.name} readOnly className='w-5 h-5' />
          </div>
        ))}
      </div>

      {/* Quantity Section */}
      <div className='flex justify-center mb-8'>
        <div className={`rounded-2xl p-4 md:p-6 max-w-sm w-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] ${darkMode ? 'bg-gray-700' : 'bg-sky-500'}`}>
          <div className={`font-extrabold mb-4 text-lg md:text-xl ${darkMode ? 'text-white' : ''}`}>Quantity</div>
          <div className='flex items-center gap-4 mb-4'>
            <button onClick={decrementQuantity} className='h-12 w-12 rounded-full bg-gray-400 text-2xl cursor-pointer hover:bg-gray-500 transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95'>-</button>
            <span className={`text-xl font-bold ${darkMode ? 'text-white' : ''}`}>{quantity}</span>
            <button onClick={incrementQuantity} className='h-12 w-12 rounded-full bg-gray-400 text-2xl cursor-pointer hover:bg-gray-500 transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95'>+</button>
          </div>
          <div className={`text-sm ${darkMode ? 'text-gray-400' : ''}`}>Max 10 per Person</div>
        </div>
      </div>
      <div className='flex justify-center'>
        <form onSubmit={handleSubmit} className={`flex flex-col gap-4 w-full max-w-md p-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
          <label className={`text-lg md:text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Full Name:</label>
          <input 
            type='text' 
            name='fullName'
            value={formData.fullName}
            onChange={handleInputChange}
            className={`mb-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-sky-500 focus:shadow-lg transition-all duration-300 hover:border-sky-400 ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300 text-gray-800'}`}
            placeholder='Enter your full name' 
            required 
          />
          
          <label className={`text-lg md:text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Email:</label>
          <input 
            type='email' 
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            className={`mb-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-sky-500 focus:shadow-lg transition-all duration-300 hover:border-sky-400 ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300 text-gray-800'}`}
            placeholder='Enter your email' 
            required 
          />
          
          <label className={`text-lg md:text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Phone Number:</label>
          <input 
            type='tel' 
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            className={`mb-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-sky-500 focus:shadow-lg transition-all duration-300 hover:border-sky-400 ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300 text-gray-800'}`}
            placeholder='Enter your phone number' 
            required 
          />
          
          <button 
            type='submit' 
            className='mt-4 p-2 bg-amber-500 hover:bg-amber-600 rounded text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] active:scale-95'
          >
            Proceed to Confirmation
          </button>
        </form>
      </div>
    </div>
  )
}

export default Bookings
