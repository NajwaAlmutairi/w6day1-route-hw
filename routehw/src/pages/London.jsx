import React from 'react'
import Navbar from '../component/Navbar'
import Pagesdesc from '../component/Pagesdesc'

function London() {
    return (
        <>
            <div className='relative h-screen w-full bg-cover bg-center '
                style={{ backgroundImage: "url('https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
            >
                <Pagesdesc title={"LONDON"} positionx={'left-1/2'} postiony={'-translate-x-1/2'} color={'#ffffff'}
                    text={'London is a famous and historic city. It is the capital of England in the United Kingdom. The city is quite popular for international tourism because London is home to one of the oldeststanding monarchies in the western hemisphere.'}
                />
            </div>
            <Navbar />

        </>
    )
}

export default London