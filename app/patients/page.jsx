'use client'

import {useState} from 'react'
import {BsSearch,BsArrowRepeat} from 'react-icons/bs'
import UsersTable from 'components/Containers/UsersTable'
import ModalContainer from 'components/Containers/ModalContainer'

export default function Patients(){
    const [open, setOpen] = useState(false)

    return(
        <div className='flex flex-col gap-2 p-4'>
            <h2 className='text-slate-600 text-xl font-semibold'>Raýatlar</h2>
            <div className='border rounded-md p-4 h-fit'>
                <div className='flex flex-row flex-nowrap items-center w-full'>
                    <button
                        onClick={() => {setOpen(true)}} 
                        className='bg-blue-500 text-white rounded-md transition hover:bg-blue-700 py-1 px-3'
                    >
                        + Täze goşmak
                    </button>
                    <ModalContainer open={open} setOpen={setOpen}/>
                    <span className='grow relative px-2'>
                        <input
                            className='border border-slate-300 rounded-md outline-none transition focus:ring focus:ring-blue-300 pl-2 h-8 w-full'
                            type='text'
                            placeholder='Gözleg'
                        ></input>
                        <BsSearch className='absolute top-2 right-4'/>
                    </span>
                    <p className='bg-blue-100 rounded-md centre h-8 w-8'>10</p>
                    <span className='bg-slate-100 rounded-md centre cursor-pointer transition hover:bg-slate-200 ml-2 h-8 w-8'>
                        <BsArrowRepeat className='h-4 w-4'/>
                    </span>
                </div>
                <UsersTable/>
            </div>
        </div>
    )
}