import React from 'react'
import Navbar from '../component/Navbar'
import Pagesdesc from '../component/Pagesdesc'



function Rome() {
    return (
        <>
            <div className='relative h-screen w-full bg-cover bg-center '
                style={{ backgroundImage: "url('https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}  >
              
                <Pagesdesc title={"ROME"} positionx={'left-1/2'} postiony={'-translate-x-1/2'} color={'#ffffff'}
                    text={'Rome is the capital of Italy, a country in southern Europe. In ancient times it was the capital of the mighty Roman Empire. Today the city is a center of culture and tourism. People from all over the world travel to Rome to see its historic monuments and art treasures.'}
                />
                <Navbar />

            </div>
        </>
    )
}

export default Rome