import {Fragment,useRef} from 'react'
import {Dialog,Transition} from '@headlessui/react'
import FormContainers from './FormContainer'

export default function ModalContainer({open,setOpen}){
    const cancelButtonRef = useRef(null)

    return(
        <Transition.Root show={open} as={Fragment}>
            <Dialog as='div' className='' onClose={setOpen} initialFocus={cancelButtonRef}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-250'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-150'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'/>
                </Transition.Child>
                <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-250'
                            enterFrom='opacity-0 translate-y-4'
                            enterTo='opacity-100 translate-y-0'
                            leave='ease-in duration-150'
                            leaveFrom='opacity-100 translate-y-0'
                            leaveTo='opacity-0 translate-y-4'
                        >
                            <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all w-1024'>
                                <div className='bg-white p-4'>
                                    <span className='flex flex-row border-b items-center justify-between h-12'>
                                        <Dialog.Title as='h2' className='text-base text-blue-500 text-lg font-semibold'>
                                            Täze raýat goşmak
                                        </Dialog.Title>
                                        <span className=''>
                                            <button 
                                                onClick={()=> setOpen(false)}
                                                className='bg-gray-200 h-fit px-4 py-1 rounded text-slate-500 mx-1'    
                                            >
                                                X Ret etmek
                                            </button>
                                            <button
                                                type='submit'
                                                className='bg-blue-200 h-fit px-4 py-1 rounded text-blue-500 font-semibold mx-1'
                                            >
                                                ✅ Ýatda sakla
                                            </button>
                                        </span>
                                    </span>
                                    <div className=''>
                                        <FormContainers/>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>    
                </div>
            </Dialog>
        </Transition.Root>
    )
}