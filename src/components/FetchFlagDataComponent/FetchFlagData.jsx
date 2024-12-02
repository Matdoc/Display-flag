import React , {  useEffect , useState} from 'react'
import FlagCard from '../FlagComponent/FlagCard'
import Axios from 'axios';
import './FetchFlagData.css'

function FetchFlagData() {
     const [data , setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await Axios.get('https://xcountries-backend.azurewebsites.net/all');
          console.log(response.data);
          setData(response.data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData(); // Call the fetchData function
    }, []);

  return (
    <div className='map-container'>
    {data.map((country, index) => (
      <FlagCard  key={index} imagename={country.name} imageurl={country.flag} />
    ))}
  </div>
  )
}

export default FetchFlagData
