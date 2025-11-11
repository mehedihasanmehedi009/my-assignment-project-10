import React, { useEffect, useState } from 'react';
import Favorits from './Favorits';
import Swal from 'sweetalert2';

const MyFavorites = () => {

    const [card,setCard]=useState({})
     useEffect(() => {
 fetch("http://localhost:3000/MyFavorites")
      .then(res=> res.json())
      .then(data=>{
        setCard(data)
      })

     },[])
  const handleDelete= (id) =>{        
 Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     fetch(`http://localhost:3000/MyFavorites/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
          })
          .then(res=>res.json())
          .then(data=>{
            Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
 setCard(prev => prev.filter(item => item._id !== id));

  console.log(data)
 })}
})}

     
    return (
     <div>
         <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-9/12 mx-auto">
    {card?.length > 0 ? (
      card.map((model) =>  <Favorits key={model._id} model={model}
       onDelete={() => handleDelete(model._id)}
      ></Favorits>)
    ) : (
      <p className="text-center mt-4">No models found</p>
    )}
  </div>
        
    </div>
    );
};

export default MyFavorites;




// impor t React, { useEffect, useState } from 'react';
// import Favorits from './Favorits';
// import Swal from 'sweetalert2';

// const MyFavorites = () => {
//   const [card, setCard] = useState([]); 

//   // Load favorites
//   useEffect(() => {
//     fetch("http://localhost:3000/MyFavorites")
//       .then(res => res.json())
//       .then(data => setCard(data))
//       .catch(err => console.error(err));
//   }, []);

//   // Delete handler
//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:3000/MyFavorites/${id}`, {
//           method: "DELETE",
//           headers: { "Content-Type": "application/json" }
//         })
//         .then(res => res.json())
//         .then(data => {
//           if (data.deletedCount > 0) {
//             Swal.fire("Deleted!", "Your file has been deleted.", "success");
           
//             setCard(prev => prev.filter(item => item._id !== id));
//           }
//         })
//         .catch(err => console.error(err));
//       }
//     });
//   };

//   return (
//     <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-9/12 mx-auto">
//       {card.length > 0 ? (
//         card.map(model => (
//           <Favorits
//             key={model._id}
//             model={model}
//             onDelete={() => handleDelete(model._id)} // ✅ pass delete function
//           />
//         ))
//       ) : (
//         <p className="text-center mt-4">No models found</p>
//       )}
//     </div>
//   );
// };

// export default MyFavorites;

 
