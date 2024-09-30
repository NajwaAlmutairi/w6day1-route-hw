import React from 'react'
import Navbar from '../component/Navbar'
import Pagesdesc from '../component/Pagesdesc'
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <div className='relative h-screen w-full bg-cover bg-center '
                style={{ backgroundImage: "url('https://media.cntravellerme.com/photos/64ad5edde3d02d75307a4358/16:9/w_1920,c_limit/abu%20dhabi-GettyImages-499512738.jpeg')" }}
            >
                <Pagesdesc title={"ABU DHABI"} positionx={'left-[37%]'} color={'#ff9770'}
                    text={'Abu Dhabi is the capital of the United Arab Emirates, a union of Arab states on the Arabian Peninsula. It is also the capital of Abu Dhabi kingdom, the largest of the seven states.'}
                />
                <Navbar />

            </div>
        </>
    )
}

export default Home