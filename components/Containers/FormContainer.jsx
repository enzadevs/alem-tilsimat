import {IoPersonOutline} from 'react-icons/io5'
import {BsPhone,Bs123} from 'react-icons/bs'

export default function FormContainer(){
    return(
        <form>
            <div className='grid grid-cols-2 gap-2 mt-2'>
                <div className='flex flex-col relative w-full'>
                    <label htmlFor='first-name' className='text-sm font-semibold ml-4'>Ady</label>
                    <input
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
                        className='border border-slate-300 rounded grow outline-none transition focus:ring focus:ring-blue-300 mt-1 ml-4 pl-2 px-1 pr-8 h-8'
                        name='date-of-birth'
                        id='date-of-birth'
                        type='date'
                    ></input>
                </div>
                <div className='flex flex-col relative w-full'>
                    <label htmlFor='patient-country' className='text-sm font-semibold ml-4'>Raýatlygy</label>
                    <select
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
    )
}