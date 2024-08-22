'use client'
import Image from 'next/image'
import Link from 'next/link'
import NavItems from '@/components/shared/Dashboard/NavItems'
import MobileNav from './MobileNav'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip'

const HeaderDashboard = () => {
  return (
    <header className='w-full border-b'>
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/CLAMIO.svg" width={128} height={38}
            alt="Clamio logo"
          />
        </Link>
        <nav className="md:flex-between md:mr-14 lg:mr-14 xl:mr-0 hidden w-full max-w-sm">
          <NavItems />
        </nav>
        <div className="flex md:hidden w-32 justify-end gap-3 items-center">
          {/* Coin Image with Tooltip */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={'/your-account/clamio-coins'}>
                <Image
                  src='/dollar.png'
                  width={35}
                  height={35}
                  alt='coin'
                />
                </Link>
                
              </TooltipTrigger>
              <TooltipContent className='p-0'>
                <Link href={'/your-account/clamio-coins'}>
                  <p className='bg-gradient-to-r rounded-sm w-full p-1 font-semibold from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 transition duration-300 ease-in-out'>$2,83,969</p>
                </Link>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default HeaderDashboard
