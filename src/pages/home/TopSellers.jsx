import React, { useState, useEffect } from 'react'
import BookCard from '../books/BookCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';



const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]

const TopSellers = () => {

  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  const { data: books = [] } = useFetchAllBooksQuery();

  const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

  return (
    <div className='py-16'>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
        <h2 className='text-4xl font-extrabold text-gradient'>Top Sellers</h2>
        
        {/* category filtering advanced dropdown */}
        <div className='relative group'>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            name="category" id="category" 
            className='appearance-none cursor-pointer bg-white border border-gray-200 text-gray-700 rounded-full px-6 py-2.5 pr-10 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary/50 transition-all font-bold shadow-sm group-hover:shadow-md'
          >
            {
              categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))
            }
          </select>
          {/* Custom Dropdown Arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {
          filteredBooks.length > 0 && filteredBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))
        }



      </Swiper>



    </div>
  )
}

export default TopSellers
