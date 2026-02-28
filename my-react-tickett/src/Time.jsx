import React, { useState, useEffect } from 'react'

function Time() {
  const targetDate = new Date('June 12, 2026 00:00:00').getTime()
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className='w-full bg-amber-500 py-8 md:py-12 px-4'>
      <div className='text-3xl md:text-5xl font-extrabold font-mono text-center mb-4 text-sky-900'>
        Event Starts In
      </div>
      <div className='flex flex-wrap justify-center gap-4 md:gap-8'>
        <div className='bg-sky-900 rounded-2xl p-4 md:p-6 min-w-[100px] md:min-w-[140px] text-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:-translate-y-2 cursor-default'>
          <div className='text-3xl md:text-5xl font-bold text-amber-400'>{timeLeft.days}</div>
          <div className='text-lg md:text-xl text-amber-50 mt-2'>Days</div>
        </div>
        <div className='bg-sky-900 rounded-2xl p-4 md:p-6 min-w-[100px] md:min-w-[140px] text-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:-translate-y-2 cursor-default'>
          <div className='text-3xl md:text-5xl font-bold text-amber-400'>{timeLeft.hours}</div>
          <div className='text-lg md:text-xl text-amber-50 mt-2'>Hours</div>
        </div>
        <div className='bg-sky-900 rounded-2xl p-4 md:p-6 min-w-[100px] md:min-w-[140px] text-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:-translate-y-2 cursor-default'>
          <div className='text-3xl md:text-5xl font-bold text-amber-400'>{timeLeft.minutes}</div>
          <div className='text-lg md:text-xl text-amber-50 mt-2'>Minutes</div>
        </div>
        <div className='bg-sky-900 rounded-2xl p-4 md:p-6 min-w-[100px] md:min-w-[140px] text-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:-translate-y-2 cursor-default'>
          <div className='text-3xl md:text-5xl font-bold text-amber-400'>{timeLeft.seconds}</div>
          <div className='text-lg md:text-xl text-amber-50 mt-2'>Seconds</div>
        </div>
      </div>
    </div>
  )
}

export default Time
