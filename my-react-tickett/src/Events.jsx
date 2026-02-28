import React, { useState } from 'react'

function Events() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ fullName: '', email: '', phone: '' })
  }

  const events = [
    { icon: '📅', date: 'June 12-13, 2026', desc: 'Two full days of immersive content and workshops.' },
    { icon: '📍', date: 'Lagos, Nigeria', desc: 'Eko convention center victoria island.' },
    { icon: '💡', date: 'Fast Tech Innovations', desc: 'Two full days of immersive content and workshops.' },
    { icon: '👥', date: '5500+ Attendees', desc: 'Connect with brightest minds in Lagos tech hub.' }
  ]

  return (
    <div id='events' className='w-full bg-sky-600 py-8 md:py-12 px-4'>
      <div className='text-3xl md:text-5xl font-extrabold font-mono text-center mb-8'>Events</div>
      
      {/* Events Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8'>
        {events.map((event, idx) => (
          <div key={idx} className='bg-sky-400 rounded-2xl p-4 md:p-6 flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:-translate-y-2 cursor-pointer group'>
            {/* Icon */}
            <div className='h-20 w-[130px] md:h-24 bg-sky-800 rounded-xl mb-4 flex items-center justify-center text-5xl md:text-6xl'>
              {event.icon}
            </div>
            <div className='font-bold text-lg md:text-2xl mb-2 text-amber-50'>{event.date}</div>
            <div className='text-sm md:text-lg text-amber-50'>{event.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events
