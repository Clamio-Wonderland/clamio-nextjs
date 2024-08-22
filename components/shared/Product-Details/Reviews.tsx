'use client'
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'next/navigation';
import ViewButton from '../buttons/ViewButton';
import { reviews } from '@/constants/data';  // Import the reviews data

const Reviews = () => {
    const params = useParams();
    const productId = Array.isArray(params.id) ? params.id[0] : params.id;

    return (
        <>
            <div className="grid grid-cols-2 py-10">
                <h2 className="text-2xl font-bold">Reviews</h2>
                <div className="text-right">
                    <Link href={`/product/${productId}/reviews`}><ViewButton /></Link>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {reviews.map((review, idx) => (
                    <div key={idx} className="bg-white p-4 shadow-lg rounded-lg">
                        <div className="flex items-center mb-4">

                            <div className="ml-4">
                                <div className="flex items-center mb-2">
                                    <div className="w-14 h-14 bg-yellow-300 rounded-full mr-4"></div> {/* Yellow circle */}
                                    {[...Array(review.stars)].map((_, starIdx) => (
                                        <FaStar key={starIdx} className="text-yellow-500" />
                                    ))}
                                </div>
                                <p className="font-bold mb-1">{review.name}</p>
                                <p>{review.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Reviews;
