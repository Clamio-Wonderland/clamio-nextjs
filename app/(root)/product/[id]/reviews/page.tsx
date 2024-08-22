import React from 'react'
import ReviewsPage from '@/components/shared/Product-Details/Reviews/all-reviews'
import FilterComponent from '@/components/shared/Product-Details/Reviews/Filter'
import FilterMobile from '@/components/shared/Product-Details/Reviews/FilterMobile'

export default function page() {
    return (
        <div>
            {/* Mobile View */}

            <div className="block md:hidden w-11/12 mx-auto">
                <div className="bg-white border border-secondary w-full mx-auto flex justify-between items-center p-4 my-8">
                    <p className="items-center justify-start text-sm">Showing 2-44 products</p>
                    <div className="ml-auto">
                        <FilterMobile />
                    </div>
                </div>
                <div className="">
                    <ReviewsPage />
                </div>
            </div>

            {/* Tablet View */}
            <div className="w-5/6 hidden md:block xl:hidden mx-auto">
                <div className="border border-secondary w-full mx-auto flex justify-between items-center p-4 mb-8">
                    <p className="items-center justify-start">Showing 2-44 products</p>
                    <div className="ml-auto">
                        <FilterMobile />
                    </div>
                </div>
                <div className="">
                    <ReviewsPage />
                </div>
            </div>

            {/* Desktop View */}
            <div className="grid grid-cols-5 w-5/6 mx-auto hidden lg:grid min-h-screen ">
                <div className="col-span-1 mt-10 text-4xl mb-20">
                    <FilterComponent />
                </div>
                <div className="col-span-4 p-4 mb-8">
                    <ReviewsPage />
                </div>
            </div>

        </div>
    )
}
