'use client'
import {BsArrowRepeat} from 'react-icons/bs'

export default function Patients(){
    return(
        <div className='w-full p-4'>
            <h2 className='text-xl text-slate-600 font-semibold'>Raýatlar</h2>
            <div className='border h-fit p-2 rounded-md'>
                <div className='input-wrapper flex flex-row flex-nowrap'>
                    <button className='bg-blue-500 text-white px-3 py-1 rounded-md transition hover:bg-blue-700'>
                        + Täze goşmak
                    </button>
                    <input
                        className='border border-slate-300 rounded-md grow pl-2 ml-4 transition focus:ring outline-none focus:ring-blue-300'
                        type='text'
                        placeholder='Gözleg'
                    ></input>
                    <p className='rounded-md h-8 w-8 bg-blue-100 centre ml-2'>10</p>
                    <span className='h-8 w-8 bg-slate-200 centre rounded-md ml-2'>
                        <BsArrowRepeat className='h-4 w-4'/>
                    </span>
                </div>
            </div>
        </div>
    )
}