 import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/Authprovider";

export const ModelCard = ({ model }) => {
  const {user} = useContext(AuthContext)
  const { title, imageURL, category, description, _id, artist_name } = model;

  return (
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

        <div className="badge  badge-secondary rounded-full">
          {category}
        </div>

        <div className="text-lg text-pink-500">{ artist_name || user?.displayName}</div>

         <p className="line-clamp-1 font-semibold text-sm">{description}</p>


        <div className="card-actions justify-between items-center mt-4">
          <Link
            to={`/alldatiels/${_id}`}
            className="btn btn-sm w-full rounded-full h-10 bg-gradient-to-r from-pink-500 to-green-400 hover:from-red-600 hover:to-pink-500 text-white"
          >
            <span className="text-[18px]">View Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
