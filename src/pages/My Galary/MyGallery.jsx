import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/Authprovider';
import Gallary from './Gallary';
import Swal from 'sweetalert2';
 

const MyGallery = () => {
    const{user} = useContext(AuthContext)
    const[arts,setArts]=useState({})
      useEffect(()=>{
        fetch(`http://localhost:3000/mygallry?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setArts(data)
        }
        )
      },[user])
        const handleDelete = (id) => {
  fetch(`http://localhost:3000/mygallry/${id}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data => {
      if (data.deletedCount > 0) {
        Swal.fire("Deleted!", "Your artwork has been deleted.", "success");
      }
    });
     setArts(prev => prev.filter(item => item._id !== id))
};
    return (
           <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-9/12 mx-auto">
    {arts?.length > 0 ? (
      arts.map((model) => <Gallary key={model._id} model={model}
      oneclick={()=>handleDelete(model._id)}
      ></Gallary>)
    ) : (
      <p className="text-center mt-4">No models found</p>
    )}
  </div>
            
    );
};

export default MyGallery;