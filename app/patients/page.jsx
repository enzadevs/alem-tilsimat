import TableHeader from 'components/Containers/TableHeader'

export default function Patients(){
    return(
        <div className='flex flex-col gap-2 p-4'>
            <h2 className='text-slate-600 text-xl font-semibold'>Raýatlar</h2>
            <div className='border rounded-md p-4 h-fit'>
                <TableHeader/>
            </div>
        </div>
    )
}