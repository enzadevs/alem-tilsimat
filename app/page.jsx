import 'styles/index.css'
import IndexOptions from 'components/Containers/IndexOptions'

export default function HomePage(){
    return(
        <div className='flex flex-row grow px-4'>
            <main className='flex flex-col'>
                <h1 className='text-xl text-slate-600 font-semibold mt-2'>Baş sahypa</h1>
                <IndexOptions/>
            </main>
        </div>
    )
}