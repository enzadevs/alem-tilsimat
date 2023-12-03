import PocketBase from 'pocketbase'

export default async function UsersTable(){
    const pb = new PocketBase('http://127.0.0.1:8090')
    const results = await pb.collection('patients').getFullList({sort: '-created'})

    return(
        <div className='rounded mt-4'>
            <table className='table-fixed w-full'>
            <thead className='h-8'>
                <tr className='bg-blue-100 rounded-md'>
                <th className='text-xs text-blue-700 w-10'>#</th>
                <th className='text-xs text-blue-700 text-start w-72'>F.A.Aa</th>
                <th className='text-xs text-blue-700 text-start w-32'>Doglan güni</th>
                <th className='text-xs text-blue-700 text-start w-32'>Resminama görnüşi</th>
                <th className='text-xs text-blue-700 text-start w-32'>Resminama belgisi</th>
                <th className='text-xs text-blue-700 text-start w-32'>Jynsy</th>
                <th className='text-xs text-blue-700 text-start w-32'>Döredilen wagty</th>
                </tr>
            </thead>
            <tbody>
                {results?.map(item=>{
                    return(
                        <tr key={item.id} className='border-b'>
                            <td className='centre'>#</td>
                            <td className='text-sm text-blue-500'>{item.firstName + ' ' + item.lastName + ' ' + item.secondName}</td>
                            <td className='text-sm font-semibold'>{item.birthDate}</td>
                            <td className='text-sm text-blue-500 font-semibold'>{item.doctype}</td>
                            <td className='text-sm text-yellow-800 rounded-md'>{item.docID + '' + item.docNumber}</td>
                            <td className='text-sm text-red-500'>{item.gender}</td>
                            <td className='text-sm'>{item.created}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
        </div>
    )
}