import React from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export default function FilterMobile() {
    return (
        <div>
            <Drawer>
                <DrawerTrigger className="w-fit text-white px-4 py-2 mx-auto bg-secondary rounded">Filter Reviews</DrawerTrigger>
                <DrawerContent className="bg-white">
                    <DrawerHeader>
                        <DrawerTitle className='py-2'>Filter Reviews</DrawerTitle>
                        <DrawerDescription className='py-2'>Filter the reviews for better insights</DrawerDescription>
                        <div className='grid grid-cols-2 gap-4 py-2'>
                            <Select>
                                <SelectTrigger className="w-full px-4">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className='bg-white p-0 m-0 border-none'>
                                        <SelectItem className='px-1 m-0' value="Most Recent">Most Recent</SelectItem>
                                        <SelectItem className='px-1 m-0' value="Highest Rated">Highest Rated</SelectItem>
                                        <SelectItem className='px-1 m-0' value="Lowest Rated">Lowest Rated</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-full px-4 ">
                                    <SelectValue placeholder="Review Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className='bg-white p-0 m-0 border-none'>
                                        <SelectItem className='px-1 m-0' value="Positive">Positive</SelectItem>
                                        <SelectItem className='px-1 m-0' value="Critical">Critical</SelectItem>
                                        <SelectItem className='px-1 m-0' value="Neutral">Neutral</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <input type="text" name="reviewerName" placeholder="Reviewer Name" className="filter-input w-full p-2 mb-4 border border-gray-300 rounded text-black text-sm p-4" />
                            <input type="text" name="reviewDate" placeholder="Review Date" className="filter-input w-full p-2 mb-4 border border-gray-300 rounded text-black text-sm p-4" />
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <Select>
                                <SelectTrigger className="w-full px-4">
                                    <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className='bg-white p-0 m-0 border-none'>
                                        <SelectItem className='px-1 m-0' value="Service">Service</SelectItem>
                                        <SelectItem className='px-1 m-0' value="Product Quality">Product Quality</SelectItem>
                                        <SelectItem className='px-1 m-0' value="Value for Money">Value for Money</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-full px-4">
                                    <SelectValue placeholder="Review Source" />
                                </SelectTrigger>
                                <SelectContent className=''>
                                    <SelectGroup className='bg-white border-none'>
                                        <SelectItem className='px-1 m-0' value="Website">Website</SelectItem>
                                        <SelectItem className='px-1 m-0' value="App">App</SelectItem>
                                        <SelectItem className='px-1 m-0' value="Social Media">Social Media</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='grid grid-cols-2 gap-4 py-2'>
                            <Select>
                                <SelectTrigger className="w-full px-4">
                                    <SelectValue placeholder="Star Rating" />
                                </SelectTrigger>
                                <SelectContent className=''>
                                    <SelectGroup className='bg-white border-none'>
                                        <SelectItem className='px-1 m-0' value="5 stars">5 stars</SelectItem>
                                        <SelectItem className='px-1 m-0' value="4 stars">4 stars</SelectItem>
                                        <SelectItem className='px-1 m-0' value="3 stars">3 stars</SelectItem>
                                        <SelectItem className='px-1 m-0' value="2 stars">2 stars</SelectItem>
                                        <SelectItem className='px-1 m-0' value="1 star">1 star</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <RadioGroup defaultValue="all">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="all" id="r1" />
                                    <Label htmlFor="r1">All Reviews</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="verified" id="r2" />
                                    <Label htmlFor="r2">Verified Reviews</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="unverified" id="r3" />
                                    <Label htmlFor="r3">Unverified Reviews</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button>Apply Filters</Button>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
}
