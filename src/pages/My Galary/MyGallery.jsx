import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/Authprovider';
import Gallary from './Gallary';
 

const MyGallery = () => {
    const{user} = useContext(AuthContext)
    const[arts,setArts]=useState({})
      useEffect(()=>{
        fetch(`http://localhost:3000/mygallry?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
             console.log(data)
            setArts(data)
        }
        )
      },[user])
    return (
           <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-9/12 mx-auto">
    {arts?.length > 0 ? (
      arts.map((model) => <Gallary key={model._id} model={model}
      ></Gallary>)
    ) : (
      <p className="text-center mt-4">No models found</p>
    )}
  </div>
            
    );
};

export default MyGallery;