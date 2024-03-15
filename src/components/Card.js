import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const Card = ({ id, name, info, price, image, btnHandler }) => {

    const [readmore, setReadmore] = useState(false);

    const description = readmore ? info : `${info.substring(0, 153)}...`; 
    function readMoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className='col-md-4 mb-4'>
            <div className='card shadow' style={{ width: '20rem' }}>
                <img src={image} className='image-container'></img>
                <div className='card-body'>
                    <div>
                        <h5 className='text-success'>₹{price}</h5>
                        <h5 className='text-dark'>{name}</h5>
                    </div>
                    <div>
                        {description}
                        <span className='text-primary' onClick={readMoreHandler}>
                            {readmore ? 'show less' : 'read more'}
                        </span>
                    </div>
                    <button className='btn btn-sm btn-outline-danger mt-2' onClick={()=> btnHandler(id)}>Not interested</button>
                </div>
            </div>
        </div>
    );
};

export default Card;