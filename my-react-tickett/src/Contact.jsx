import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div id='contact' className='w-full bg-gradient-to-br from-sky-700 via-sky-600 to-sky-800 py-16 md:py-24 px-4'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight'>
            Get In Touch
          </h2>
          <p className='text-lg md:text-xl text-sky-100 max-w-2xl mx-auto'>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12'>
          {/* Contact Info Cards */}
          <div className='space-y-6'>
            {/* Email Card */}
            <div className='group bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/30 cursor-pointer'>
              <div className='flex items-center gap-4'>
                <div className='w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-300'>
                  📧
                </div>
                <div>
                  <h3 className='text-xl font-bold text-white mb-1'>Email Us</h3>
                  <p className='text-sky-100'>info@lagostechcon.com</p>
                  <p className='text-sky-100'>support@lagostechcon.com</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className='group bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/30 cursor-pointer'>
              <div className='flex items-center gap-4'>
                <div className='w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-300'>
                  📞
                </div>
                <div>
                  <h3 className='text-xl font-bold text-white mb-1'>Call Us</h3>
                  <p className='text-sky-100'>+234 800 123 4567</p>
                  <p className='text-sky-100'>+234 800 987 6543</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className='group bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/30 cursor-pointer'>
              <div className='flex items-center gap-4'>
                <div className='w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-300'>
                  📍
                </div>
                <div>
                  <h3 className='text-xl font-bold text-white mb-1'>Visit Us</h3>
                  <p className='text-sky-100'>Eko Convention Center</p>
                  <p className='text-sky-100'>Victoria Island, Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6'>
              <h3 className='text-xl font-bold text-white mb-4 text-center'>Follow Us</h3>
              <div className='flex justify-center gap-4'>
                <a href="#" className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl hover:bg-amber-500 hover:scale-110 hover:rotate-12 transition-all duration-300'>🐦</a>
                <a href="#" className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl hover:bg-amber-500 hover:scale-110 hover:rotate-12 transition-all duration-300'>📘</a>
                <a href="#" className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl hover:bg-amber-500 hover:scale-110 hover:rotate-12 transition-all duration-300'>📸</a>
                <a href="#" className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl hover:bg-amber-500 hover:scale-110 hover:rotate-12 transition-all duration-300'>💼</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20'>
            <h3 className='text-2xl md:text-3xl font-bold text-white mb-6'>Send us a Message</h3>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name Input */}
              <div className='relative'>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder='Your Name'
                  className='w-full bg-white/20 border-2 border-white/30 rounded-xl px-4 py-4 text-white placeholder-sky-200 focus:outline-none focus:border-amber-500 focus:bg-white/30 transition-all duration-300'
                />
                <span className='absolute right-4 top-1/2 -translate-y-1/2 text-2xl'>👤</span>
              </div>

              {/* Email Input */}
              <div className='relative'>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder='Your Email'
                  className='w-full bg-white/20 border-2 border-white/30 rounded-xl px-4 py-4 text-white placeholder-sky-200 focus:outline-none focus:border-amber-500 focus:bg-white/30 transition-all duration-300'
                />
                <span className='absolute right-4 top-1/2 -translate-y-1/2 text-2xl'>✉️</span>
              </div>

              {/* Message Input */}
              <div className='relative'>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder='Your Message'
                  rows='5'
                  className='w-full bg-white/20 border-2 border-white/30 rounded-xl px-4 py-4 text-white placeholder-sky-200 focus:outline-none focus:border-amber-500 focus:bg-white/30 transition-all duration-300 resize-none'
                ></textarea>
                <span className='absolute right-4 top-6 text-2xl'>💬</span>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg py-4 px-8 rounded-xl hover:from-amber-400 hover:to-amber-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all duration-300 transform'
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
