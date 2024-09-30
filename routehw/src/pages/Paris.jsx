import React from 'react'
import Navbar from '../component/Navbar'
import Pagesdesc from '../component/Pagesdesc'


function Paris() {
    return (
        <>
            <div className='relative h-screen w-full bg-cover bg-center '
                style={{ backgroundImage: "url('https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
            >
                <Pagesdesc title={"PARIS"} positionx={'left-[37%]'} color={'#292617'}
                    text={'is the capital of the country of France. It has long been one of western Europe’s major centers of culture and business. Some of the world’s greatest artists, writers, scholars, fashion designers, and chefs have lived in Paris.'}
                />
            </div>

            <Navbar />
        </>
    )
}

export default Paris