import React, { useState, useEffect } from 'react'
import axios from 'axios';


const ResounceList = ({ kaynak }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${kaynak}`);
      setResources(response.data);
    })(kaynak)

  }, [kaynak])

  return (
    <div>
      <ul>{resources.map(kayit => <li key={kayit.id}>{kayit.title}</li>)}</ul>
    </div>
  )

}


export default ResounceList
