import { useState } from "react"

const CountryInformation=({country,handleVisitedCountry})=>{
    console.log(country)
const {name,flags,population,area,cca3}=country

const [visited,setVisited]=useState(false);
const handleVisited=()=>{
    setVisited(true)
}
return(
    <div  className={`country ${visited && 'visiting'}`}>
    <h2>Name:{name.common}</h2>
    <img src={flags.png} alt="" />
    <p>Population:{population}</p>
    <p>Area:area</p>
    <p><small>Code:{cca3}</small></p>
    <button onClick={handleVisited}>{!visited? 'Going':'Visited'}</button>
    {
        visited ?'I have visited this country':'I want to visit'
    }
    <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
    </div>

)
}
export default CountryInformation;