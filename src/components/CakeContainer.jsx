import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'


const CakeContainer = (props) => {
    return (
        <div className='flex flex-col gap-4'>
            <h2>Number Of Cakes: <span className='text-5xl pl-4'>{props.numOfCakes}</span></h2>
            <button className='px-2 py-1 rounded-md text-white shadow-md bg-gray-700 flex justify-center w-full' onClick={props.buyCake}>Buy Cakes</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}


// export default connect(mapDispatchToProps, mapStateToProps)(CakeContainer)

// arguments should be in correct order
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)

