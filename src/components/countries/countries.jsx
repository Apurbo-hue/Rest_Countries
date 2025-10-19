import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {

    //data fetched
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries

    console.log(countries)
     
    //useState for handeling the countries
    const [visitedCountries,setVisitedCountries]=useState([])
    const handleVisitedCountries=(country)=>{
        const newVisitedCountries = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }


    //useState for handeling the flags
    const [visitedFlags,setVisitedFlags]=useState([])
    const handleVisitedFlags=(flags)=>{
        const newFlags = [...visitedFlags,flags]
        setVisitedFlags(newFlags)
    }

    
    return (
        <>
            <h1 className='text-center'>Total countries: {countries.length}</h1>
            <p className='text-center'>Visited Nations:{visitedCountries.length}</p>

            {/* display name */}
            <ol className='list-decimal flex justify-center gap-6'>
                {visitedCountries.map(name=><li>{name.name.common}</li>)}
            </ol>

            {/* display flags */}
            <div className='flex justify-center gap-6'>
                 {visitedFlags.map(flag=><img className='w-14' key={flag.alt} src={flag.png}></img>)}
            </div>
        
            
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {countries.map((country) => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>)}
            </div>
        </>
    );
};

export default Countries;