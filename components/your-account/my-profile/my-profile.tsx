'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FaClipboard } from 'react-icons/fa'; // Import FontAwesome Clipboard icon
import { toast } from 'sonner'; // Import the toast function from sonner

// Define the form validation schema using Zod
const schema = z.object({
    firstName: z.string().nonempty('First name is required'),
    lastName: z.string().nonempty('Last name is required'),
    gender: z.enum(['Male', 'Female']),
    email: z.string().email('Invalid email address'),
    mobile: z.string().min(10, 'Mobile number should be at least 10 digits').max(15, 'Mobile number should be at most 15 digits'),
});

type ProfileFormInputs = z.infer<typeof schema>;

const ProfileForm: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [referralCode] = useState('CLAMIO1234'); // Example referral code

    // Initialize the form with default values
    const defaultValues: ProfileFormInputs = {
        firstName: 'John',
        lastName: 'Doe',
        gender: 'Male',
        email: 'samplemail@clamio.in',
        mobile: '+9199XX9C7XX9',
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ProfileFormInputs>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const onSubmit = (data: ProfileFormInputs) => {
        console.log(data);
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        reset(defaultValues); // Reset to initial values if editing is cancelled
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralCode).then(() => {
            toast('Referral code copied to clipboard!');
        });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
                <button
                    type="button"
                    onClick={handleEdit}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Edit
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-600 mb-1">First Name</label>
                        <input
                            type="text"
                            disabled={!isEditing}
                            className={`w-full p-2 border rounded ${isEditing ? 'border-gray-300' : 'border-transparent bg-gray-100'}`}
                            {...register('firstName')}
                        />
                        {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Last Name</label>
                        <input
                            type="text"
                            disabled={!isEditing}
                            className={`w-full p-2 border rounded ${isEditing ? 'border-gray-300' : 'border-transparent bg-gray-100'}`}
                            {...register('lastName')}
                        />
                        {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Your Gender</label>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input type="radio" value="Male" disabled={!isEditing} {...register('gender')} className="mr-2" />
                            Male
                        </label>
                        <label className="flex items-center">
                            <input type="radio" value="Female" disabled={!isEditing} {...register('gender')} className="mr-2" />
                            Female
                        </label>
                    </div>
                    {errors.gender && <span className="text-red-500">{errors.gender.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Email Address</label>
                    <input
                        type="email"
                        disabled={!isEditing}
                        className={`w-full p-2 border rounded ${isEditing ? 'border-gray-300' : 'border-transparent bg-gray-100'}`}
                        {...register('email')}
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Mobile Number</label>
                    <input
                        type="text"
                        disabled={!isEditing}
                        className={`w-full p-2 border rounded ${isEditing ? 'border-gray-300' : 'border-transparent bg-gray-100'}`}
                        {...register('mobile')}
                    />
                    {errors.mobile && <span className="text-red-500">{errors.mobile.message}</span>}
                </div>
                {isEditing && (
                    <div className="flex justify-end space-x-4">
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Save</button>
                        <button type="button" onClick={handleCancel} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
                    </div>
                )}
            </form>

            {/* Referral Code Section */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Referral Code</h2>
                <p className="text-gray-600 mb-4">
                    Share the referral code below with your friends and family. They can use it to sign up and enjoy benefits on our platform.
                </p>
                <div className="flex items-center">
                    <span className="text-gray-700">{referralCode}</span>
                    <button onClick={copyToClipboard} className="ml-4 p-2 bg-gray-200 rounded hover:bg-gray-300">
                        <FaClipboard className="h-5 w-5 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">FAQs</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">
                            What happens when I update my email address (or mobile number)?
                        </h3>
                        <p className="text-gray-700">
                            Your login email id (or mobile number) changes, likewise. You'll receive all your account-related communication on your updated email address (or mobile number).
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">
                            When will my Clamio account be updated with the new email address (or mobile number)?
                        </h3>
                        <p className="text-gray-700">
                            It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">
                            What happens to my existing Clamio account when I update my email address (or mobile number)?
                        </h3>
                        <p className="text-gray-700">
                            Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your order history, saved information, and personal details.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">
                            Does my Seller account get affected when I update my email address?
                        </h3>
                        <p className="text-gray-700">
                            Clamio has a 'single sign-on' policy. Any changes will reflect in your Seller account also.
                        </p>
                    </div>
                </div>
                <div className="mt-6 space-y-2">
                    <a href="#deactivate" className="text-blue-600 hover:underline">Deactivate Account</a><br />
                    <a href="#delete" className="text-red-600 hover:underline">Delete Account</a>
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;
