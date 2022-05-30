import React from 'react';

const Country = ({country}) => {
    console.log(country.mame)
    const name = country.name.common
    const capital = country.capital
    const area = country.area
    
    const languagesKey = Object.keys(country.languages)
    const flagImage = country.flags.png
    
    return(
        <div>
            <h2>{name}</h2>
            <section>
                <p>capital: {capital}</p>
                <p>area: {area}</p>
            </section>
            <section>
                <h3>languages:</h3>
                <ul>
                    {
                        languagesKey.map((key) =>{
                            return <li>{country.languages[key]}</li>
                        })
                    }
                </ul>
            </section>
            <img src={flagImage} alt={name} />
        </div>
    )
}

export default Country