import axios from 'axios'

const baseUrl = "https://restcountries.com/v3.1/all"

const getAllCountries = async() => {
    return await axios.get(baseUrl)
}

export default getAllCountries
