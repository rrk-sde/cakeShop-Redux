import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'



const HooksCakeContainer = () => {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div className='border-black border flex flex-col gap-4 px-4'>
            <h1 className='font-bold'>Using useSelector and useDispatch</h1>
            <h1>Num of cakes : <span className='text-5xl pl-4'>{numOfCakes}</span></h1>
            <button onClick={() => dispatch(buyCake())} className='px-2 py-1 rounded-md text-white shadow-md bg-gray-700 flex justify-center w-full' >Buy Cakes</button>
        </div>
    )
}

export default HooksCakeContainer