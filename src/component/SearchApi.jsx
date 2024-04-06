import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SearchApi =() => {
    const [getApi, setgetApi] = useState([])



    const apiURL = 'http://49.13.2.10:4000/todos'
    // Get request paramters
   useEffect(()=>{
    axios.get(apiURL)
    .then(resp => {
        setgetApi(resp.data.data);
    }).catch(err => {
    console.log(err.message);})
   },[apiURL],);

   axios
   .post(apiURL, {
    name: "Ife",
    description: "single and busy",
   })
   .then(response => {
        console.log(response);
    });

  return (
    <>
    <div className='bg-blue-600'>
        <div>
            {getApi.map((item, idx)=>(
                <div key={idx}>
                    <p>{item.name}</p>
                    <p>{item.completed}</p>
                </div>
            ))}
        </div>

    </div>
   

    </>
  )
}

export default SearchApi
