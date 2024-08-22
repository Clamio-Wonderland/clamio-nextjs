import { Coin } from '@/constants/data'
import Image from 'next/image'
import { ArrowLeft, ArrowUp, ArrowDown } from 'lucide-react'

export default function Coins() {
  return (
    <div className="min-h-screen border md:mx-5 bg-white shadow-md mx-3 sm:mx-0 rounded-md p-6">
      <div className="flex justify-between items-center mb-8">
       
        <div className="flex items-center space-x-2">
          <div className="bg-white rounded-full p-2">
            <Image src={Coin} alt="Coin" width={48} height={48} />
          </div>
          <div>
            <div className="text-4xl font-bold">2,83,969</div>
            <div className="text-lg">total coin balance</div>
          </div>
        </div>
      </div>
      <div className="flex justify-around text-center mb-8">
        <div>
          <div className="text-xl font-semibold">12,95,520</div>
          <div className="text-sm text-gray-400">lifetime earnings</div>
        </div>
        <div>
          <div className="text-xl font-semibold">10,11,551</div>
          <div className="text-sm text-gray-400">lifetime spends</div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4">
        <div className="text-lg font-semibold mb-4">COIN LEDGER</div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-1 rounded">
              <ArrowUp className="w-4 h-4" />
            </div>
            <div className="text-lg">79</div>
          </div>
          <div className="text-sm text-gray-400">deal of the day unlocked reward</div>
          <div className="text-sm text-gray-400">8th Jul</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 p-1 rounded">
              <ArrowDown className="w-4 h-4" />
            </div>
            <div className="text-lg">100</div>
          </div>
          <div className="text-sm text-gray-400">deal of the day unlocked</div>
          <div className="text-sm text-gray-400">8th Jul</div>
        </div>
      </div>
    </div>
  )
}
