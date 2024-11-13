import { useEffect, useState } from "react";
import CountryInformation from "../CountryInfo/CountryInformation";
import './country.css'

const Country=()=>{
    const[country,setCountry]=useState([]);

    const [visitedCountry,setVisitedCountry]=useState([])

    const handleVisitedCountry=(country)=>{
        // console.log('visiting solo in diff country')
        const newVisited=[...visitedCountry,country]
        setVisitedCountry(newVisited)
    }

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])
    return(
        <div>
        <h4>Country:{country.length}</h4>
        <div className="country-contain">
            <h3>Visited Countries:{visitedCountry.length}</h3>
            <ul>
           { 
           visitedCountry.map(country=> <li>{country.name.common}</li>)
           }
            </ul>
        </div>

        <div className="country-container">
        {
            // key is used when more data is reloaded
            country.map(country=><CountryInformation handleVisitedCountry={handleVisitedCountry} country={country} key={country.cca3}></CountryInformation>)
        }
        </div>
        </div>

    )
}
export default Country;