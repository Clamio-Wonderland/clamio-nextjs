"use client"
import React from 'react';

const FilterReviews: React.FC = () => {
    return (
        <div className="p-4 bg-white border border-gray-200 shadow-lg max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Sort by</h3>
            <select className="w-full bg-gray-100 text-gray-800 text-sm mb-4 py-2 px-3 border border-gray-300 rounded focus:ring-yellow-500 focus:border-yellow-500">
                <option value="highest-rated">Highest Rated</option>
                <option value="most-recent">Most Recent</option>
                <option value="least-recent">Least Recent</option>
            </select>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Minimum Rating</h3>
            <input type="number" name="minRating" placeholder="1" className="w-full bg-gray-100 text-gray-800 text-sm mb-4 py-2 px-3 border border-gray-300 rounded focus:ring-yellow-500 focus:border-yellow-500" />

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Maximum Rating</h3>
            <input type="number" name="maxRating" placeholder="5" className="w-full bg-gray-100 text-gray-800 text-sm mb-4 py-2 px-3 border border-gray-300 rounded focus:ring-yellow-500 focus:border-yellow-500" />

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Review Type</h3>
            <div className="mb-4 text-sm text-gray-600">
                <label className="block mb-2">
                    <input type="radio" name="reviewType" value="all" className="mr-2 text-yellow-500" defaultChecked />
                    All Reviews
                </label>
                <label className="block mb-2">
                    <input type="radio" name="reviewType" value="with-images" className="mr-2 text-yellow-500" />
                    With Images
                </label>
                <label className="block mb-2">
                    <input type="radio" name="reviewType" value="with-comments" className="mr-2 text-yellow-500" />
                    With Comments
                </label>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Categories</h3>
            <div className="mb-4 text-sm text-gray-600">
                <label className="block mb-2">
                    <input type="checkbox" value="positive" className="mr-2 text-yellow-500" />
                    Positive
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="negative" className="mr-2 text-yellow-500" />
                    Negative
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="neutral" className="mr-2 text-yellow-500" />
                    Neutral
                </label>
            </div>
        </div>
    );
};

export default FilterReviews;
