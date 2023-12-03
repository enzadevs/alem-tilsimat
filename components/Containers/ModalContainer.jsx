import {Fragment,useRef} from 'react'
import {Dialog,Transition} from '@headlessui/react'
import {IoPersonOutline} from 'react-icons/io5'
import {BsPhone,Bs123} from 'react-icons/bs'

export default function ModalContainer({open,setOpen}){
    const cancelButtonRef = useRef(null)
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const secondNameRef = useRef()
    const birthDateRef = useRef()
    const countryRef = useRef()
    const genderRef = useRef()
    const stateRef = useRef()
    const provinceRef = useRef()
    const phoneNumberRef = useRef()
    const homePhoneNumberRef = useRef()
    const docTypeRef = useRef()
    const docIDRef = useRef()
    const docNumberRef = useRef()

    async function handleFormSubmit(e){
        e.preventDefault()
        const data = {
            'firstName': firstNameRef.current.value,
            'lastName': lastNameRef.current.value,
            'secondName': secondNameRef.current.value,
            'birthDate': birthDateRef.current.value,
            'gender': genderRef.current.value,
            'state': stateRef.current.value,
            'province': provinceRef.current.value,
            'phoneNumber': phoneNumberRef.current.value,
            'homePhoneNumber': homePhoneNumberRef.current.value,
            'doctype': docTypeRef.current.value,
            'docID': docIDRef.current.value,
            'docNumber': docNumberRef.current.value
        }
        const response = await fetch(`http://127.0.0.1:8090/api/collections/patients/records`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(!response.ok){
            alert('Please fill out required fields.')
        } else {
            alert('Patient was successfully created.')
            setOpen(false)
        }
    }

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
                                                onClick={handleFormSubmit}
                                                form='userForm'
                                                type='submit'
                                                className='bg-blue-200 h-fit px-4 py-1 rounded text-blue-500 font-semibold mx-1'
                                            >
                                                ✅ Ýatda sakla
                                            </button>
                                        </span>
                                    </span>
                                    <div>
                                    <form id='userForm'>
                                        <div className='grid grid-cols-2 gap-2 mt-2'>
                                            <div className='flex flex-col relative w-full'>
                                                <label htmlFor='first-name' className='text-sm font-semibold ml-4'>Ady</label>
                                                <input
                                                    ref={firstNameRef}
                                                    className='border border-slate-300 rounded grow outline-none transition focus:ring focus:ring-blue-300 mt-1 ml-4 pl-2 px-1 pr-8 h-8'
                                                    name='first-name'
                                                    id='first-name'
                                                    type='text'
                                                    placeholder='...'
                                                    minLength={1}
                                                    maxLength={64}
                                                ></input>
                                                <IoPersonOutline className='text-slate-500 absolute right-2 top-8'/>
                                            </div>
                                            <div className='flex flex-col relative w-full'>
                                                <label htmlFor='last-name' className='text-sm font-semibold ml-4'>Familiýasy</label>
                                                <input
                                                    ref={lastNameRef}
                                                    className='border border-slate-300 rounded grow outline-none transition focus:ring focus:ring-blue-300 mt-1 ml-4 pl-2 px-1 pr-8 h-8'
                                                    name='last-name'
                                                    id='last-name'
                                                    type='text'
                                                    placeholder='...'
                                                    minLength={1}
                                                    maxLength={64}
                                                ></input>
                                                <IoPersonOutline className='text-slate-500 absolute right-2 top-8'/>
                                            </div>
                                            <div className='flex flex-col relative w-full'>
                                                <label htmlFor='second-name' className='text-sm font-semibold ml-4'>Atasynyň ady</label>
                                                <input
                                                    ref={secondNameRef}
                                                    className='border border-slate-300 rounded grow outline-none transition focus:ring focus:ring-blue-300 mt-1 ml-4 pl-2 px-1 pr-8 h-8'
                                                    name='second-name'
                                                    id='second-name'
                                                    type='text'
                                                    placeholder='...'
                                                    minLength={1}
                                                    maxLength={64}
                                                ></input>
                                                <IoPersonOutline className='text-slate-500 absolute right-2 top-8'/>
                                            </div>
                                            <div className='flex flex-col relative w-full'>
                                                <label htmlFor='date-of-birth' className='text-sm font-semibold ml-4'>Doglan güni</label>
                                                <input
                                                    ref={birthDateRef}
                                                    className='border border-slate-300 rounded grow outline-none transition focus:ring focus:ring-blue-300 mt-1 ml-4 pl-2 px-1 pr-8 h-8'
                                                    name='date-of-birth'
                                                    id='date-of-birth'
                                                    type='date'
                                                ></input>
                                            </div>
                                            <div className='flex flex-col relative w-full'>
                                                <label htmlFor='patient-country' className='text-sm font-semibold ml-4'>Raýatlygy</label>
                                                <select
                                                    ref={countryRef}
                                                    className='border border-slate-300 rounded grow outline-none transition focus:ring focus:ring-blue-300 mt-1 ml-4 pl-2 px-1 pr-8 h-8'
                                                    name='patient-country'
                                                    id='patient-country'
                                                    type='select'
                                                >
                                                    <option value='none'>...</option>
                                                    <option value='turkmenistan'>Turkmenistan</option>
                                                    <option value='turkiye'>Turkiye</option>
                                                </select>
                                            </div>
                                            <div className='flex flex-col relative w-full'>
                                                <label htmlFor='patient-gender' className='text-sm font-semibold ml-4'>Jynsy</label>
                                                <select
                                                    ref={genderRef}
                                                    className='border border-slate-300 rounded grow outline-none transition focus:ring focus:ring-blue-300 mt-1 ml-4 pl-2 px-1 pr-8 h-8'
                                                    name='patient-gender'
                                                    id='patient-gender'
                                                    type='select'
                                                >
                                                    <option value='none'>...</option>
                                                    <option value='erkek'>Erkek</option>
                                                    <option value='ayal'>Ayal</option>
                                                </select>
                                            </div>
                                            <div className='flex flex-col relative w-full'>
                                                <label htmlFor='patient-state' className='text-sm font-semibold ml-4'>Ýaşaýan welaýaty</label>
                                                <select
                                                    ref={stateRef}
                                                    className='border border-slate-300 rounded grow outline-none transition  focus:ring focus:ring-blue-300 mt-1 ml-4 pl-2 px-1 pr-8 h-8'
                                                    name='patient-state'
                                                    id='patient-state'
                                                    type='select'
                                                >
                                                    <option value='none'>...</option>
                                                    <option value='aşgabat'>Aşgabat</option>
                                                    <option value='ahal'>Ahal</option>
                                                    <option value='mary'>Mary</option>
                                                    <option value='lebap'>Lebap</option>
                                                    <option value='daşoguz'>Daşoguz</option>
                                                    <option value='balkan'>Balkan</option>
                                                </select>
                                            </div>
                                            <div className='flex flex-col relative w-full'>
                                                <label htmlFor='patient-province' className='text-sm font-semibold ml-4'>Ýaşaýan etraby</label>
                                                <select
                                                    ref={provinceRef}
                                                    className='border border-slate-300 rounded grow outline-none transition focus:ring focus:ring-blue-300 mt-1 ml-4 pl-2 px-1 pr-8 h-8'
                                                    name='patient-province'
                                                    id='patient-province'
                                                    type='select'
                                                >
                                                    <option value='none'>...</option>
                                                </select>
                                            </div>
                                            <div className='flex flex-col relative w-full'>
                                                <p className='text-slate-500 font-semibold absolute left-6 top-7'>+993</p>
                                                <label htmlFor='patient-phone-number' className='text-sm font-semibold ml-4'>Telefon belgisi</label>
                                                <input
                                                    ref={phoneNumberRef}
                                                    className='border border-slate-300 rounded grow transition outline-none focus:ring focus:ring-blue-300 mt-1 ml-4 px-1 pl-12 pr-8 h-8'
                                                    name='patient-phone-number'
                                                    id='patient-phone-number'
                                                    type='number'
                                                    placeholder='6*******'
                                                ></input>
                                                <BsPhone className='text-slate-500 absolute right-2 top-8'/>
                                            </div>
                                            <div className='flex flex-col relative w-full'>
                                                <p className='text-slate-500 font-semibold absolute left-6 top-7'>+993</p>
                                                <label htmlFor='patient-home-phone-number' className='text-sm font-semibold ml-4'>Öý telefon belgisi</label>
                                                <input
                                                    ref={homePhoneNumberRef}
                                                    className='border border-slate-300 rounded grow transition outline-none focus:ring focus:ring-blue-300 mt-1 ml-4 px-1 pl-12 pr-8 h-8'
                                                    name='patient-home-phone-number'
                                                    id='patient-home-phone-number'
                                                    type='number'
                                                    placeholder='12******'
                                                ></input>
                                                <BsPhone className='text-slate-500 absolute right-2 top-8'/>
                                            </div>
                                            <div className='flex flex-col relative w-full'>
                                                <label htmlFor='document-type' className='text-sm font-semibold ml-4'>Resminama görnüşi</label>
                                                <select
                                                    ref={docTypeRef}
                                                    className='border border-slate-300 rounded grow outline-none transition  focus:ring focus:ring-blue-300 mt-1 ml-4 pl-2 px-1 pr-8 h-8'
                                                    name='document-type'
                                                    id='document-type'
                                                    type='select'
                                                >
                                                    <option value='none'>...</option>
                                                    <option value='passport'>Passport</option>
                                                    <option value='birth'>Dogluş hakynda şahadatnama</option>
                                                </select>
                                            </div>
                                            <div className='flex flex-col relative w-full'>
                                                <label htmlFor='document-id' className='text-sm font-semibold ml-4'>Seriýa belgisi</label>
                                                <select
                                                    ref={docIDRef}
                                                    className='border border-slate-300 rounded grow outline-none transition  focus:ring focus:ring-blue-300 mt-1 ml-4 pl-2 px-1 pr-8 h-8'
                                                    name='document-id'
                                                    id='document-id'
                                                    type='select'
                                                >
                                                    <option value='none'>...</option>
                                                    <option value='I-AH'>I-AH</option>
                                                    <option value='I-AG'>I-AG</option>
                                                    <option value='I-LB'>I-LB</option>
                                                    <option value='I-MR'>I-MR</option>
                                                    <option value='I-DZ'>I-DZ</option>
                                                    <option value='I-BN'>I-BN</option>
                                                </select>
                                            </div>
                                            <div className='flex flex-col relative col-span-full'>
                                                <label htmlFor='document-number' className='text-sm font-semibold ml-4'>Resminama belgisi</label>
                                                <input
                                                    ref={docNumberRef}
                                                    className='border border-slate-300 rounded grow outline-none transition  focus:ring focus:ring-blue-300 mt-1 ml-4 pl-2 px-1 pr-8 h-8'
                                                    name='document-number'
                                                    id='document-number'
                                                    type='number'
                                                    placeholder='...'
                                                    minLength={1}
                                                    maxLength={64}
                                                ></input>
                                                <Bs123 className='text-slate-500 absolute right-2 top-8'/>
                                            </div>
                                        </div>
                                    </form>
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