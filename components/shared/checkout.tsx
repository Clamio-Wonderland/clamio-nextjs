"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  addAddress,
  updateAddress,
  deleteAddress,
  selectAddress,
} from "@/utils/addressSlice";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RootState } from "@/Store/store";
import { states } from "@/constants/data";

const formSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Name is required"),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits"),
  pincode: z.string().min(6, "Pincode is required"),
  locality: z.string().min(2, "Locality is required"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  landmark: z.string().optional(),
  alternativePhone: z
    .union([
      z.string().regex(/^[0-9]{10}$/, "Invalid phone number"),
      z.literal(""),
    ])
    .optional(),
  type: z.string().min(2, "Type is required"),
});


const Checkout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const addresses = useSelector((state: RootState) => state.address.addresses);
  const selectedAddressId = useSelector(
    (state: RootState) => state.address.selectedAddressId
  );

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      name: "",
      phone: "",
      pincode: "",
      locality: "",
      address: "",
      city: "",
      state: "",
      landmark: "",
      alternativePhone: "",
      type: "",
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSelectAddress = (id: string) => {
    dispatch(selectAddress(id));
  };

  const handleEditAddress = (address: any) => {
    form.reset(address);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleFormSubmit = (data: any) => {
    if (isEditing) {
      dispatch(updateAddress(data));
    } else {
      dispatch(addAddress({ ...data, id: Date.now().toString() }));
    }
    form.reset();
    setIsEditing(false);
    setShowForm(false);
  };

  return (
    <div className="md:w-full  lg:max-w-7xl lg:mx-auto flex flex-col lg:flex-row gap-8 md:p-4">
      <div className="lg:w-full w-full">
        <div className="bg-white border shadow-md rounded-lg">
          <div className="flex flex-col space-y-4 md:p-6">
            {addresses.map((address: any) => (
              <div
                key={address.id}
                className={`flex items-center p-4 border gap-3 rounded-lg ${
                  selectedAddressId === address.id ? "border-blue-500" : ""
                }`}
              >
                <input
                  type="radio"
                  className="mr-2"
                  checked={selectedAddressId === address.id}
                  onChange={() => handleSelectAddress(address.id)}
                />
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm md:text-base">
                      {address.name} ({address.type}) {address.phone}
                    </span>
                    <div>
                      <Button
                        className="text-blue-500 bg-transparent hover:bg-transparent hover:underline mr-2 text-sm"
                        onClick={() => handleEditAddress(address)}
                      >
                        Edit
                      </Button>
                      <Button
                        className="text-red-500 bg-transparent hover:bg-transparent hover:underline text-sm"
                        onClick={() => dispatch(deleteAddress(address.id))}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">{address.address}</p>
                </div>
              </div>
            ))}
            <Button
              className="bg-secondary text-white py-3 w-full md:w-48 font-semibold hover:bg-gray-800"
              onClick={() => setShowForm(!showForm)}
            >
              Add a new address
            </Button>
            {showForm && (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleFormSubmit)}
                  className="p-4 border mt-4 bg-zinc-50 shadow-md rounded-lg"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {isEditing ? "Edit Address" : "Add a new address"}
                  </h3>
                  <input type="hidden" {...form.register("id")} />
                  <div className="flex flex-col gap-4 md:flex-row md:gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field}   placeholder="Name"/>
                          </FormControl>
                           <FormMessage className="text-red-500"/>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input {...field}  placeholder="10-digit mobile number" />
                          </FormControl>
                           <FormMessage className="text-red-500"/>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row md:gap-5">
                    <FormField
                      control={form.control}
                      name="pincode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pincode</FormLabel>
                          <FormControl>
                            <Input {...field}  placeholder="Pincode" />
                          </FormControl>
                           <FormMessage className="text-red-500"/>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="locality"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Locality</FormLabel>
                          <FormControl>
                            <Input {...field}    placeholder="Locality"    />
                          </FormControl>
                           <FormMessage className="text-red-500"/>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Textarea {...field}    placeholder="Address (Area and Street)"/>
                        </FormControl>
                         <FormMessage className="text-red-500"/>
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-col gap-4 md:flex-row md:gap-5">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input {...field}   placeholder="City/District/Town" />
                          </FormControl>
                           <FormMessage className="text-red-500"/>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={(value) => field.onChange(value)}
                              value={field.value}
                            >
                              <SelectTrigger className="w-full md:w-72 p-3 border mb-2">
                                <SelectValue placeholder="Select State" />
                              </SelectTrigger>
                              <SelectContent className="bg-white">
                                <SelectGroup>
                                  <SelectLabel>States</SelectLabel>
                                  {states.map((state) => (
                                    <SelectItem
                                      key={state.name}
                                      className="hover:bg-yellow-300"
                                      value={state.name}
                                    >
                                      {state.name}
                                    </SelectItem>
                                  ))}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                           <FormMessage className="text-red-500"/>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row md:gap-5">
                    <FormField
                      control={form.control}
                      name="landmark"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Landmark</FormLabel>
                          <FormControl>
                            <Input {...field}  placeholder="Landmark (Optional)" />
                          </FormControl>
                           <FormMessage className="text-red-500"/>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="alternativePhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Alternative Phone</FormLabel>
                          <FormControl>
                            <Input {...field} className="w-60"   placeholder="Alternate Phone (Optional)" />
                          </FormControl>
                           <FormMessage className="text-red-500"/>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value}
                          >
                            <SelectTrigger className="w-full md:w-72 p-3 border mb-2">
                              <SelectValue placeholder="Select Type" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                              <SelectGroup>
                                <SelectLabel>Type</SelectLabel>
                                <SelectItem className="hover:bg-yellow-300" value="Home">Home</SelectItem>
                                <SelectItem className="hover:bg-yellow-300" value="Work">Work</SelectItem>
                                <SelectItem className="hover:bg-yellow-300" value="Other">Other</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                         <FormMessage className="text-red-500"/>
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-between items-center">

                    <Button
                    type="submit"
                    className="bg-primary  py-3 w-36 my-3 md:w-48 font-semibold hover:bg-yellow-400"
                  >
                    {isEditing ? "Update Address" : "Add Address"}
                  </Button>

                  <Button
                    className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                    onClick={() => {
                      setShowForm(false);
                      setIsEditing(false);
                      form.reset();
                    }}
                    type="button"
                  >
                    Cancel
                  </Button>
                  </div>
                  
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Checkout;
