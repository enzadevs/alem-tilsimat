import Link from 'next/link'
import {BsPeople,BsMoisture,BsLightningCharge,BsCashCoin} from 'react-icons/bs'

export default function IndexOptions(){
    return(
        <div className='flex-wrapper'>
            <Link href='/patients' className='flex-item h-100 p-4 bg-slate-200 border-slate-300 border rounded-md'>
                <BsPeople className='h-20 w-20 text-slate-500 my-4'/>
                <h2 className='text-slate-500 text-3xl font-semibold my-4'>Registratura</h2>
                <p className='text-slate-500 my-4'>HMDU ulgamynda hasaba alnan raýatlar we olaryň ýüztutmalary, barlaglary, bejergileri</p>
            </Link>
            <Link href='/radiology' className='flex-item h-100 p-4 bg-green-200 border-slate-300 border rounded-md'>
                <BsLightningCharge className='h-20 w-20 text-green-700 my-4'/>
                <h2 className='text-green-700 text-3xl font-semibold my-4'>Radiologiýa</h2>
                <p className='text-green-700 my-4'>Radiologiýa bölümine ugradylan raýatlar, geçirilen barlaglar we olaryň netijeleri</p>
            </Link>
            <Link href='/laboratory' className='flex-item h-100 p-4 bg-yellow-50 border-slate-300 border rounded-md'>
                <BsMoisture className='h-20 w-20 text-yellow-500 my-4'/>
                <h2 className='text-yellow-500 text-3xl font-semibold my-4'>Barlaghana</h2>
                <p className='text-yellow-500 my-4'>Barlaghana iberilen raýatlar, geçirilen laboratoriki barlaglar we olaryň netijeleri</p>
            </Link>
            <Link href='/cashier' className='flex-item h-100 p-4 bg-red-200 border-slate-300 border rounded-md'>
                <BsCashCoin className='h-20 w-20 text-red-500 my-4'/>
                <h2 className='text-red-500 text-3xl font-semibold my-4'>Kassa</h2>
                <p className='text-red-500 my-4'>Raýatlaryň barlaglary we bejergileri üçin tölegleri kabul ediş nokady</p>
            </Link>
        </div>
    )
}