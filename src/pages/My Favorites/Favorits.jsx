import React from 'react';
import Swal from 'sweetalert2';

const Favorits = ({model,onDelete}) => {
    const {
    title,
    imageURL,
    category,
    description,

    like
  } = model;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <figure className="overflow-hidden h-44"> {/* fixed image height */}
        <img
          src={imageURL}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>

       
          <div className="badge  bg-pink-300 rounded-full">
            {category}
          </div>
           <div className="badge text-lg bg-gray-400 rounded-full  ">
           👍 {like}
          </div>
    

        <p className="line-clamp-1 font-semibold text-sm">{description}</p>
          
        {/* View Details Button */}
        <div className="card-actions justify-between items-center mt-4">
         
        </div>
        <div onClick={onDelete} className='items-center'> 
            <h1 className="btn btn-sm w-full font-semibold text-2xl rounded-full h-10 bg-gradient-to-r from-pink-500 to-green-400 hover:from-red-600 hover:to-pink-500 text-white">UnFavorits</h1>
        </div>

    
 
      </div>
    </div>
        </div>
    );
};

export default Favorits;