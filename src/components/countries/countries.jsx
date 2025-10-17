import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    return (
        <div className='grid grid-cols-3 gap-4'>
            {countries.map((country)=><Country country={country}></Country>)}
        </div>
    );
};

export default Countries;