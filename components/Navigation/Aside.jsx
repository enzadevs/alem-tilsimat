import Link from 'next/link'
import {BsFillJournalBookmarkFill,BsChatSquareDots,BsArrowRepeat} from 'react-icons/bs'

export default function Aside(){
    return(
        <div className='aside-wrapper p-4 flex flex-col gap-6 w-72'>
            <div className='doc-container border h-fit w-100 rounded-md border-slate-300 shadow-xl flex flex-col gap-2 p-4'>
                <Link href='/' className='border-b border-slate-400 h-fit w-full py-2 flex flex-row justify-between'>
                    <p>Resminamalar</p>
                    <p className='text-slate-800 font-semibold bg-blue-100 w-7 h-6 centre rounded-md'>0</p>
                </Link>
                <Link href='/' className='h-fit w-full flex flex-row items-center '>
                    <span className='icon-circle-wrapper bg-blue-100 h-12 w-12 centre'>
                        <BsFillJournalBookmarkFill className='h-6 w-6 text-blue-600'/>
                    </span>
                    <p className='font-semibold text-slate-600 hover:text-blue-700 ml-2'>Gollanmalar</p>
                    <p className='text-slate-600 font-semibold bg-blue-100 w-7 h-6 centre rounded-md ml-auto'>0</p>
                </Link>
                <Link href='/' className='h-fit w-full flex flex-row items-center '>
                    <span className='icon-circle-wrapper bg-yellow-100 h-12 w-12 centre'>
                        <BsFillJournalBookmarkFill className='h-6 w-6 text-yellow-600'/>
                    </span>
                    <p className='font-semibold text-slate-600 hover:text-blue-700 ml-2'>Gollanmalar</p>
                    <p className='text-slate-600 font-semibold bg-blue-100 w-7 h-6 centre rounded-md ml-auto'>0</p>
                </Link>
                <Link href='/' className='h-fit w-full flex flex-row items-center '>
                    <span className='icon-circle-wrapper bg-red-100 h-12 w-12 centre'>
                        <BsFillJournalBookmarkFill className='h-6 w-6 text-red-600'/>
                    </span>
                    <p className='font-semibold text-slate-600 hover:text-blue-700 ml-2'>Gollanmalar</p>
                    <p className='text-slate-600 font-semibold bg-blue-100 w-7 h-6 centre rounded-md ml-auto'>0</p>
                </Link>
                <Link href='/' className='h-fit w-full flex flex-row items-center '>
                    <span className='icon-circle-wrapper bg-green-100 h-12 w-12 centre'>
                        <BsFillJournalBookmarkFill className='h-6 w-6 text-green-600'/>
                    </span>
                    <p className='font-semibold text-slate-600 hover:text-blue-700 ml-2'>Gollanmalar</p>
                    <p className='text-slate-600 font-semibold bg-blue-100 w-7 h-6 centre rounded-md ml-auto'>0</p>
                </Link>
            </div>
            <div className='chat-wrapper border h-fit w-100 rounded-md border-slate-300 shadow-xl flex flex-col gap-2 p-4'>
                <span className='h-fit w-full flex flex-row items-center border-b border-slate-400 pb-2'>
                    <BsChatSquareDots className='h-4 w-4'/>
                    <p className='text-slate-600 hover:text-blue-700 ml-2'>Çat</p>
                    <BsArrowRepeat className='ml-auto cursor-pointer'/>
                    <p className='text-blue-500 font-semibold bg-blue-100 w-7 h-6 centre rounded-md ml-2'>0</p>
                </span>
                <span className='centre h-32 flex-col gap-2'>
                    <BsChatSquareDots className='h-10 w-10 text-slate-600'/>
                    <p className='text-slate-600'>Täze habar ýok</p>
                </span>
            </div>
        </div>
    )
}