import React, { useEffect, useState } from 'react';
import Favorits from './Favorits';

const MyFavorites = () => {
    const [card,setCard]=useState({})
     useEffect(() => {
 fetch("http://localhost:3000/MyFavorites")
      .then(res=> res.json())
      .then(data=>{
        setCard(data)
      })

     },[])
    return (
     <div>
         <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-8/12 mx-auto">
    {card?.length > 0 ? (
      card.map((model) =>  <Favorits key={model._id} model={model}></Favorits>)
    ) : (
      <p className="text-center mt-4">No models found</p>
    )}
  </div>
        
    </div>
    );
};

export default MyFavorites;

 
