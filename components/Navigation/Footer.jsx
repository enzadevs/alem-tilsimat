import 'styles/footer.css'
import Link from 'next/link'

export default function Footer(){
    return(
        <footer className='mt-auto'>
            <p>Copyright © 2023. Ähli hukuklary goralan</p>
            <p>Powered by
                <Link href='https://alemtilsimat.com/' className='mx-1.5 underline text-cyan-800' target='_blank'>Älem Tilsimat HJ</Link>
            </p>
        </footer>
    )
}