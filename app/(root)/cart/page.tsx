'use client'
import { useSelector } from 'react-redux';
import { RootState } from '@/Store/store';
import CartItem from '@/components/shared/cart/cartItem';
import OrderSummary from '@/components/shared/cart/orderSummary';
import SimilarProducts from '@/components/shared/Product-Details/SimilarProducts';

export default function CartPage() {
    const items = useSelector((state: RootState) => state.cart.items);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalCost = items.reduce((acc, item) => acc + item.quantity * parseFloat(item.price.slice(1)), 0);

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 mb-12">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>
                    {items.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                            <div className="lg:col-span-2">
                                {items.map(item => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </div>
                            <OrderSummary totalItems={totalItems} totalCost={totalCost} />
                        </div>
                    ) : (
                        <p className="text-lg text-gray-500">Your cart is currently empty.</p>
                    )}
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
                    {/* <h2 className="text-2xl font-bold mb-4 text-gray-800">Similar Products</h2> */}
                    <SimilarProducts />
                </div>
            </div>
        </div>
    );
}
