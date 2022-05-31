
import React from 'react';
import { useState, useEffect} from 'react'
import SearchFilter from './SearchFilter'
import Country from './Country'
import getAllCountries from '../server/restCountries';



const CountriesList = ({countries, handleShowCountryClick}) => {
 
    return(
        <div>
            {                        
            countries.map((country) => {            
                return (
                    <div>
                        <p key = {country.name.common}>{country.name.common}</p>
                        
                        <button value={country.name.common} onClick={handleShowCountryClick}>show</button>
                    </div>
                    )
            })
            
            }   
        </div>
    )
}

const CountriesData = () => {
    
    const [countriesInfo, setCountriesInfo] =useState([])
    const [filterCountry, setFilterCountry] =useState("")
    const [countryShown, setCountryShown] =useState({})

    function filterCountries(filter){
        return countriesInfo.filter((country) => {
            return country.name.common.toLowerCase().includes(filter.toLocaleLowerCase());
        })
    }

    const handleFilterChange = (event) => {
        return setFilterCountry(event.target.value)
    }

    const handleShowCountryClick = (event) =>{
        console.log(event.target.value)
        let countryToShow = filterCountries(event.target.value)
        console.log(countryToShow)
        return setCountryShown(countryToShow[0])
    }

    useEffect(() =>{
        getAllCountries().then(response => {
            setCountriesInfo(response.data)
        }, [])
    })
    console.log(Object.keys(countryShown).length)
    let filteredCountries = filterCountries(filterCountry)
    return (
        <div>
            <h1>Countries Information</h1>
            <SearchFilter
                text = "find Countries "
                filterValue={filterCountry}
                handleFilterChange = {handleFilterChange}/>
                {
                    (filterCountry !== "" ) ? (
                    <CountriesList 
                        countries = {filteredCountries}
                        handleShowCountryClick = {handleShowCountryClick}/>
                    ) : null
                }
                {
                    (Object.keys(countryShown).length > 0) ? (
                        <Country country={countryShown} />
                    ) : null
                } 
            
            {
            (filteredCountries.length === 1) ? (
                <Country country={filteredCountries[0]}/>
            ) : null    
            } 
        </div>
    )
}
 
export default CountriesData