'use client'
import React from 'react';
import { FaHeart, FaShoppingCart, FaStar, FaUserCircle } from 'react-icons/fa';
import { cardData } from '@/constants/data';
import Card from '@/components/Reusable Components/Card';

import { useParams } from 'next/navigation';

const SimilarProducts = () => {
    const params = useParams();
    const productId = Array.isArray(params.id) ? params.id[0] : params.id;

    return (
        <>
            <div>
                <h2 className="text-2xl font-bold">Explore Similar Products</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cardData.slice(0, 4).map((product, idx) => (
                    <Card key={idx} card={product} id={product.id} idx={idx} />
                ))}
            </div>
        </>
    );
};

export default SimilarProducts;
