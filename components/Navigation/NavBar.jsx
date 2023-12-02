import 'styles/nav.css'
import Link from 'next/link'
import Image from 'next/image'
import BrandLogo from 'public/assets/favicon.png'
import LanguageDropdown from 'components/Containers/LanguageDropdown'
import ProfileDashboard from 'components/Containers/ProfileDashboard'

const navLinks = [
    {
        id: 0,
        link: '/patients',
        text: 'Raýatlar'
    },
    {
        id: 1,
        link: '/registration',
        text: 'Registratura'
    },
    {
        id: 2,
        link: '/comings',
        text: 'Kabulhana'
    },
    {
        id: 3,
        link: '/department/1',
        text: 'Terapiýa'
    },
    {
        id: 4,
        link: '/department/2',
        text: 'Laboratoriýa'
    },
    {
        id: 5,
        link: '/department/3',
        text: 'Radiologiýa'
    },
    {
        id: 6,
        link: '/cashier',
        text: 'Kassa'
    },
    {
        id: 7,
        link: '/others',
        text: 'Beýlekiler'
    },
    {
        id: 8,
        link: '/settings',
        text: 'Sazlamalar'
    }
]

export default function NavBar(){
    return(
        <nav className='bg-slate-100 w-full p-3 flex flex-row justify-between'>
            <Link href='/' className='flex flex-row'>
                <Image
                    src={BrandLogo}
                    alt='brand logo'
                    className='brand-logo'
                ></Image>
                <h1 className='text-blue-600 hover:text-blue-800 font-bold text-xl max-w-fit ml-2'>HMDU</h1>
            </Link>
            <ul className='flex flex-row'>
                {navLinks.map(item =>{
                    return(
                        <Link key={item.id} href={item.link} className='text-xs mx-1 bg-blue-200 text-blue-800 centre px-2 rounded-md transition-all ease-in-out delay-100 hover:text-base hover:font-medium'>
                            {item.text}
                        </Link>
                    )
                })}
            </ul>
            <span className='min-w-fit flex flex-row'>
                <LanguageDropdown/>
                <ProfileDashboard/>
            </span>
        </nav>
    )
}