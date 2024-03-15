import React from 'react';
import Card from './Card'

function Tours({ tours, btnHandler }) {
    return (
        <div className='container'>
            <div className='text-center my-5'>
                <h2>Travel in India</h2>
            </div>
            <div className='row '>
                {
                    tours.map((tour) => {
                            return <Card key={tour.id} {...tour} btnHandler={btnHandler} />
                        //return <Card {...tour} btnHandler={btnHandler}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;