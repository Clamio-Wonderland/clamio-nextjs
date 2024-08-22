'use client';


import DropDownMenu from '@/components/Reusable Components/DropDown';
import DropDown from '@/components/Reusable Components/DropDownMenu';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
// import { headerLinks, headerLinksDashboard } from '@/constants/index'

import { Coin, headerLinks } from '@/constants/data' 
import { RootState } from '@/Store/store';
import { setIsLoggedIn } from '@/utils/authSlice';
import Image from 'next/image';


import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';

const NavItems = () => {

  const pathname = usePathname();
 

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 mr-20  md:flex-row">
          {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap `}
          >
            <Link href={link.route}>{link.label}</Link>
             
         
              
           
          </li>
         
        )
      })}
            {/* {isLoggedIn && (
        <li>
          <Button
            onClick={() => {
              dispatch(setIsLoggedIn(false));
              router.push('/explore');
            }}
            className="font-semibold md:hidden lg:block hover:bg-yellow-400 px-4 py-2 rounded-md shadow-md"
          >
            Logout
          </Button>
        </li>
      )} */}
    <TooltipProvider>
      <Tooltip>
        
        <TooltipTrigger asChild>
         
          <Image
        src='/dollar.png'
        width={35}
        height={35}
        alt='coin'
        />
        
        </TooltipTrigger>
        <TooltipContent className='p-0'>
        <Link href={'/your-account/clamio-coins'}>
          <p className='bg-gradient-to-r rounded-sm w-full p-1 font-semibold from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 transition duration-300 ease-in-out'>$2,83,969</p>
          </Link>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>



     
       
       <li className='hidden lg:block '><DropDownMenu/></li>
       <li className='hidden md:block lg:hidden '><DropDown/></li>
      {/* {headerLinksDashboard.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}

            className={`${
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap hidden`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })} */}
    </ul>
  )
}

export default NavItems