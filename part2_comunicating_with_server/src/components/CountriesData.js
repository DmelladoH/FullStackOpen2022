import axios from 'axios'
import React from 'react';
import { useState, useEffect} from 'react'
import SearchFilter from './SearchFilter'
import Country from './Country'

const CountriesData = () => {
    
    const [countriesInfo, setCountriesInfo] =useState([])
    const [filterCountry, setFilterCountry] =useState("")

    const handleFilterChange = (event) => {
        return setFilterCountry(event.target.value)
    }

    useEffect(() =>{
        axios.get('https://restcountries.com/v3.1/all').then(response => {
            setCountriesInfo(response.data)
        })
    })

    let countries = countriesInfo.filter((country) => {
        return country.name.common.toLowerCase().includes(filterCountry.toLocaleLowerCase());
    })
    
    return (
        <div>
            <h1>Countries Information</h1>
            <SearchFilter
                text = "find Countries "
                filterValue={filterCountry}
                handleFilterChange = {handleFilterChange}/>
            <ul>
                {
                    filterCountry !== "" && (countries.length !== 1)? (                  
                        countries.map((country) => {            
                            return <li key = {country.name.common}>{country.name.common}</li>
                        })
                    ) : null
                }
            </ul>
            
            {
            (countries.length === 1) ? (
                <Country country={countries[0]}/>
            ) : null    
            } 
        </div>
    )
}
 
export default CountriesData