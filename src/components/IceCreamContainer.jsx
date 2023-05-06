import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux/icecream/iceCreamActions'




const IceCreamContainer = () => {

    console.log(useSelector(state => state), 10)
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div className='border-black border flex flex-col gap-4 px-4'>
            <h1 className='font-bold'>Using useSelector and useDispatch</h1>
            <h1>Num of Icecream : <span className='text-5xl pl-4'>{numOfIceCream}</span></h1>
            <button onClick={() => dispatch(buyIceCream())} className='px-2 py-1 rounded-md text-white shadow-md bg-gray-700 flex justify-center w-full' >Buy IceCream</button>
        </div>
    )
}

export default IceCreamContainer