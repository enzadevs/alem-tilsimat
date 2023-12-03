export const metadata = {
    title: 'Alem Tilsimat',
    description: 'Alem Tilsimat Test App',
    name: 'viewport', 
    content:'width=device-width, initial-scale=1',
}

import './globals.css'
import NavBar from 'components/Navigation/NavBar'
import Aside from 'components/Navigation/Aside'
import Footer from 'components/Navigation/Footer'

export default function RootLayout({children}){
    return(
        <html>
            <body className='flex flex-col min-h-screen'>
                <NavBar/>
                <div className='flex flex-row grow'>
                    <div className='grow'>
                        {children}
                    </div>
                    <Aside/>
                </div>
                <Footer/>
            </body>
        </html>
    )
}