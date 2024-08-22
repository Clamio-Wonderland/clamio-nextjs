'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const schema = z.object({
    firstName: z.string().nonempty('First name is required'),
    lastName: z.string().nonempty('Last name is required'),
    contactNumber: z.string().min(10, 'Contact number must be at least 10 digits').max(15, 'Contact number must be at most 15 digits'),
    queryType: z.enum(['Orders', 'Payments', 'Delivery']),
    feedback: z.string().nonempty('Feedback is required'),
});

type ContactFormInputs = z.infer<typeof schema>;

const ContactUs: React.FC = () => {
    const { register, handleSubmit, reset, formState: { errors }, control } = useForm<ContactFormInputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: ContactFormInputs) => {
        console.log(data);
        reset();
    };

    const handleCancel = () => {
        reset();
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Input
                            type="text"
                            placeholder="First Name"
                            {...register('firstName')}
                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>}
                    </div>
                    <div>
                        <Input
                            type="text"
                            placeholder="Last Name"
                            {...register('lastName')}
                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.lastName && <p className="text-red-600">{errors.lastName.message}</p>}
                    </div>
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="Contact Number"
                        {...register('contactNumber')}
                        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {errors.contactNumber && <p className="text-red-600">{errors.contactNumber.message}</p>}
                </div>
                <div>
                    <Controller
                        control={control}
                        name="queryType"
                        render={({ field }) => (
                            <Select {...field} onValueChange={(value) => field.onChange(value)}>
                                <SelectTrigger className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300">
                                    <SelectValue placeholder="Select Query Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className='bg-white'>
                                        <SelectItem className='pl-2' value="Orders">Orders</SelectItem>
                                        <SelectItem className='pl-2' value="Payments">Payments</SelectItem>
                                        <SelectItem className='pl-2' value="Delivery">Delivery</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.queryType && <p className="text-red-600">{errors.queryType.message}</p>}
                </div>
                <div>
                    <textarea
                        {...register('feedback')}
                        placeholder="Your Feedback"
                        rows={4}
                        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {errors.feedback && <p className="text-red-600">{errors.feedback.message}</p>}
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </form>
            <div className="mt-8 text-gray-700 space-y-2">
                <p>If you need immediate assistance, please contact us at:</p>
                <div className='flex gap-4'>
                    <p><FontAwesomeIcon icon={faPhone} /> +1-800-123-4567</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> contact@clamio.in</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
