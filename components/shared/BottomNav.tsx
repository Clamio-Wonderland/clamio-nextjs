// components/BottomNavigation.tsx
'use client';

import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, SquareMenu } from "lucide-react";
import { usePathname } from "next/navigation";
import { sidebarlinks } from "@/constants/data";

const BottomNav = () => {
  const pathName = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white md:hidden border-t py-2 shadow-md z-50">
      <div className="flex justify-between items-center py-2 px-4">
        {/* Show 3 items on mobile and 4 items on small screens */}
        <div className="flex flex-1 gap-4 justify-around sm:hidden">
          {sidebarlinks.slice(0, 4).map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`flex flex-col items-center text-sm ${
                link.href === pathName ? "text-yellow-600" : "text-gray-600"
              } hover:text-primary-600`}
            >
              <link.icon className="h-6 w-6" />
              {/* <span className="mt-1">{link.title}</span> */}
            </Link>
          ))}
        </div>

        <div className="hidden sm:flex  sm:justify-between sm:gap-[4.3rem] md:hidden">
          {sidebarlinks.slice(0, 4).map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`flex flex-col items-center text-sm ${
                link.href === pathName ? "text-yellow-600" : "text-gray-600"
              } hover:text-primary-600`}
            >
              <link.icon className="h-6 w-6" />
              <span className="mt-1">{link.title}</span>
            </Link>
          ))}
        </div>

        {/* Dropdown for more items */}
        <DropdownMenu >
          <DropdownMenuTrigger>
            <div className="flex flex-col items-center md:hidden">
              <SquareMenu className="h-6 w-6 mx-3 text-gray-600" />
              <span className="hidden sm:block text-sm text-gray-600">More</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white shadow-lg">
            {sidebarlinks.slice(3).map((link, index) => (
              <Link key={index} href={link.href} passHref>
                <DropdownMenuItem className="flex items-center hover:bg-yellow-400 text-gray-600 hover:text-primary-600">
                  <link.icon className="h-5 w-5" />
                  <span className="ml-2">{link.title}</span>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default BottomNav;
