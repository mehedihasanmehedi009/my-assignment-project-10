 import { Link } from "react-router";

export const ModelCard = ({ model }) => {
  const { title, imageURL, category, description, _id, created_by } = model;

  return (
   
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ">
         <figure className="  lg:h-85 overflow-hidden">
           <img
             src={imageURL}
             alt={title}
             className="w-full h-full    hover:scale-110 transition-transform duration-300"
           />
         </figure>
   
         <div className="card-body">
           <h2 className="card-title text-2xl">{title}</h2>
   
           <div className="badge text-1xl badge-secondary rounded-full">{category}</div>
   
           <div className="text-1xl text-pink-500">{created_by}</div>
   
           <p className="line-clamp-1 font-semibold text-sm">{description}</p>
   
           <div className="card-actions justify-between items-center mt-4">
             <Link
               to={`/model-details/${_id}`}
               className="btn btn-sm w-full rounded-full h-10  bg-gradient-to-r from-pink-500 to-green-400 hover:from-red-600 hover:to-pink-500 text-white"
             >
              <span className=' text-[18px]'> View Details</span>
             </Link>
           </div>
         </div>
       </div>
  );
};
