import React from 'react';

const Country = ({country}) => {
    console.log(country)
    return (
        <div className='border m-4 p-4 rounded-xl'>
            <img src={country.flags.flags.png}></img>
            <p>Name: {country.name.common}</p>
        </div>
    );
};

export default Country;