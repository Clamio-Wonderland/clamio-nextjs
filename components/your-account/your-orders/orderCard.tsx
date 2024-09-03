'use client'
import UserInfoDialog from '@/components/shared/UserInfoDialogProps';
import { OrderDemo } from '@/lib/types';
import React, { useState } from 'react';

interface OrderCardProps {
    order: OrderDemo;
    activeTab: string;
}

const OrderCard: React.FC<OrderCardProps> = ({ order, activeTab }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [status, setStatus] = useState(order.status ? 'Processing' : 'Pending');

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleSubmit = () => {
        setStatus('Processing');
        handleCloseDialog();
    };

    return (
        <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-lg">
            <UserInfoDialog 
                isOpen={isDialogOpen} 
                onClose={handleCloseDialog} 
                status={status} 
                onSubmit={handleSubmit} 
            />
            <div className="flex gap-10 sm:flex-row sm:justify-between mb-4">
                {/* Other content */}
            </div>
            <div className="flex flex-col sm:flex-row items-start">
                <img src={order.imgUrl} alt={order.productName} className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg mb-4 sm:mb-0" />
                <div className="ml-0 sm:ml-4 flex-1">
                    <p className="font-medium text-gray-800 text-lg">{order.productName}</p>
                    {order.status && <p className="text-sm text-yellow-600 mt-1">{order.status}</p>}
                    <div className="flex flex-wrap gap-2 mt-2">
                        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">Buy it again</button>
                        {activeTab === 'my-bookings' ? (
                            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300" onClick={handleOpenDialog}>User Info</button>
                        ) : (
                            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">View your item</button>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between sm:flex-row gap-2 mt-4">
                <button className="text-blue-600 hover:underline text-sm">View Return/Refund Status</button>
                <button className="text-blue-600 hover:underline text-sm">Write a product review</button>
            </div>
            <button className="text-blue-600 hover:underline text-sm mt-4 block">Archive order</button>
        </div>
    );
};

export default OrderCard;
