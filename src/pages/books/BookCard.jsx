import React from 'react'
import { FiShoppingCart, FiEye } from 'react-icons/fi';
import { getImgUrl } from '../../utils/getImgUrl';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

const BookCard = ({ book }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    return (
        <div className="group relative bg-white rounded-3xl p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100/70 hover:border-primary/30">
            {/* Discount Badge */}
            {book?.oldPrice > book?.newPrice && (
                <div className="absolute top-6 left-6 z-10 bg-[#FF5757] text-white text-[10px] uppercase font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {Math.round(((book.oldPrice - book.newPrice) / book.oldPrice) * 100)}% OFF
                </div>
            )}

            <div className="flex flex-col md:flex-row gap-6">

                {/* IMAGE SECTION */}
                <div className="relative overflow-hidden rounded-2xl bg-gray-50/50 flex-shrink-0 aspect-[3/4] md:h-64 self-center transition-all duration-500">
                    <Link to={`/books/${book._id}`}>
                        <img
                            src={`${getImgUrl(book?.coverImage)}`}
                            alt={book?.title}
                            className="h-full w-full object-contain p-4 transform transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-md"
                        />
                    </Link>

                    {/* Quick View Overlay */}
                    <div className="absolute inset-0 bg-secondary/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Link
                            to={`/books/${book._id}`}
                            className="bg-white p-3.5 rounded-full shadow-2xl transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300 hover:scale-110"
                        >
                            <FiEye className="text-secondary size-5" />
                        </Link>
                    </div>
                </div>

                {/* CONTENT SECTION */}
                <div className="flex flex-col justify-between flex-grow py-3">
                    <div>
                        <Link to={`/books/${book._id}`}>
                            <h3 className="text-xl font-extrabold text-gray-800 leading-snug group-hover:text-primary-dark transition-colors duration-300 line-clamp-2">
                                {book?.title}
                            </h3>
                        </Link>

                        <p className="text-primary-dark text-[10px] font-bold uppercase tracking-widest mt-2 mb-3 bg-primary/10 inline-block px-2 py-1 rounded-md">
                            {book?.category || "Literature"}
                        </p>

                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                            {book.description.length > 100
                                ? `${book?.description.slice(0, 100)}...`
                                : book?.description}
                        </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4">
                        {/* Pricing */}
                        <div className="flex flex-col">
                            <span className="text-2xl font-black text-secondary">
                                ${book?.newPrice}
                            </span>
                            {book?.oldPrice && (
                                <span className="text-sm font-medium text-gray-400 line-through decoration-red-400/50">
                                    ${book?.oldPrice}
                                </span>
                            )}
                        </div>

                        {/* Advanced Action Button */}
                        <button
                            onClick={() => handleAddToCart(book)}
                            className="relative flex items-center justify-center gap-2 bg-secondary text-white px-5 py-3 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:bg-primary hover:text-secondary hover:shadow-[0_10px_20px_rgba(255,206,26,0.3)] active:scale-90"
                        >
                            <FiShoppingCart className="size-5" />
                            <span className="text-sm">Add</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard;