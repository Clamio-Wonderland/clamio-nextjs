import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  Bell,
  DollarSign,
  Clock,
  Gift,
  Repeat,
  Home,
  Lock,
  CreditCard,
  Shield,
} from "lucide-react"; // Importing Lucide icons

export function AccountSelectBar() {
  return (
    <div className="flex justify-center py-3 md:hidden">
      <Select>
        <SelectTrigger className="w-[250px] border-gray-400 flex items-center">
          <User className="mr-2" />
          <SelectValue placeholder="Account Settings" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="bg-white w-screen h-screen p-4">
            <SelectItem value="profile" className="flex items-center">
              <User className="mr-2" /> Profile Information
            </SelectItem>
            <SelectItem value="addresses" className="flex items-center">
              <Home className="mr-2" /> Manage Addresses
            </SelectItem>
            <SelectItem value="contact" className="flex items-center">
              <Bell className="mr-2" /> Contact Us
            </SelectItem>
            <SelectItem value="gift-cards" className="flex items-center">
              <Gift className="mr-2" /> Gift Cards
            </SelectItem>
            <SelectItem value="upi" className="flex items-center">
              <DollarSign className="mr-2" /> Saved UPI
            </SelectItem>
            <SelectItem value="cards" className="flex items-center">
              <CreditCard className="mr-2" /> Saved Cards
            </SelectItem>
            <SelectItem value="coupons" className="flex items-center">
              <Gift className="mr-2" /> My Coupons
            </SelectItem>
            <SelectItem value="reviews" className="flex items-center">
              <Clock className="mr-2" /> My Reviews & Ratings
            </SelectItem>
            <SelectItem value="notifications" className="flex items-center">
              <Bell className="mr-2" /> All Notifications
            </SelectItem>
            <SelectItem value="wishlist" className="flex items-center">
              <Shield className="mr-2" /> My Wishlist
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
