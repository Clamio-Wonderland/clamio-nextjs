"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import { HotNewproductData, TopDiscountProduct, TopSellingproductData } from '@/constants/data';
import { FaStar } from 'react-icons/fa';

const allProducts = [...TopSellingproductData, ...HotNewproductData, ...TopDiscountProduct];

const ReviewsPage = () => {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const product = allProducts.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="w-full xl:w-11/12 mx-auto xl:p-6  ">
            <h1 className="text-3xl font-bold mb-6">Reviews for {product.productName}</h1>
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.reviews && product.reviews.length > 0 ? (
                        product.reviews.map((review, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between">
                                <div className="flex items-start mb-4">
                                    <div className="w-12 h-12 bg-yellow-300 rounded-full mr-4"></div>
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold mb-2">{review.title}</h2>
                                        <p className="text-sm text-gray-600">{review.content}</p>
                                        <div className="flex items-center mt-2">
                                            {[...Array(review.stars)].map((_, starIdx) => (
                                                <FaStar key={starIdx} className="text-yellow-500 text-lg" />
                                            ))}
                                        </div>
                                    </div>

                                </div>

                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No reviews available for this product.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReviewsPage;
