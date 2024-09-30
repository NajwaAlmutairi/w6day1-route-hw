import React from 'react'
import Navbar from '../component/Navbar'
import Pagesdesc from '../component/Pagesdesc'

function Riyadh() {
    return (
        <>
            <div className='relative h-screen w-full bg-cover bg-center'
                style={{ backgroundImage: "url('https://i.pinimg.com/1200x/6d/9a/8f/6d9a8f89b95887bf9ebb27ceefa78b47.jpg')" }}
            >
                <Pagesdesc title={"RIYADH"} positionx={'left-1/2'} postiony={'-translate-x-1/2'} color={'#ffffff'}
                    text={'Riyadh is the capital of Saudi Arabia, It is the largest city in Saudi Arabia.'}
                />
                <Navbar />
            </div>
        </>
    )
}

export default Riyadh