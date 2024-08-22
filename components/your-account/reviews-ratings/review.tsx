// Review.js
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { reviews } from '@/constants/data'

export default function Review() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {reviews.map((review, idx) => (
                    <div key={idx} className="bg-white p-4 shadow-lg rounded-lg">
                        <div className="flex items-center mb-4">
                            <div className="ml-4">
                                <div className="flex items-center mb-2">
                                    <div className="bg-yellow-300 h-14 w-14 rounded-full mr-3"></div>
                                    {Array.from({ length: review.stars }).map((_, starIdx) => (
                                        <FaStar key={starIdx} className="text-yellow-500" />
                                    ))}
                                </div>
                                <p className="font-bold">{review.name}</p>
                                <p>{review.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
