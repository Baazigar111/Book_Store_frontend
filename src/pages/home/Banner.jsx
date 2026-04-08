import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end relative group'>
            {/* Background blur effect for floating premium feel */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-yellow-200 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <img src={bannerImg} alt="" className="relative transform transition-transform duration-700 hover:scale-105 z-10" />
        </div>
        
        <div className='md:w-1/2 w-full flex flex-col items-start'>
             <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary-dark font-bold text-xs uppercase tracking-widest">
                🏆 Bestsellers 2026
            </div>
            <h1 className='md:text-6xl text-4xl font-extrabold mb-7 leading-tight text-gradient'>
                New Releases <br /> 
                <span className="text-gradient-primary">This Week</span>
            </h1>
            <p className='mb-10 text-gray-600 text-lg leading-relaxed max-w-lg'>
                It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone.
            </p>

            <button className='btn-primary mt-2 group relative overflow-hidden'>
                <span className="relative z-10">Subscribe Now</span>
            </button>
        </div>

       
    </div>
  )
}

export default Banner