import Image from 'next/image'
import TKM from 'public/assets/tm.png'

export default function LanguageDropdown(){
    return(
        <div className='flex flex-row items-center bg-white cursor-pointer px-2 border rounded-md min-w-fit'>
            <Image
                src={TKM}
                className='mr-2 h-6 w-6'
                alt='flag of turkmenistan'
            ></Image>
            <p>Türkmen</p>
        </div>
    )
}