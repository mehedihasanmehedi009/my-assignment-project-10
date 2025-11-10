 
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const AllDatiels = () => {
   
const [product, setModel] = useState({})
 const {id} = useParams()
  console.log(id)
   useEffect(() => {
    fetch(`http://localhost:3000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setModel(data);
        console.log(data);
  
      });
  }, [id]);

  
  return (
       <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <img
            src={product.imageURL?.trim() || ""}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg shadow"
          />
        </div>

        <div className="p-4">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-sm text-gray-500 mb-4">
            Category: {product.category} • Dimensions: {product.dimensions}
          </p>

          <div className="mb-4">
            <h3 className="font-semibold">Medium</h3>
            <p>{product.mediumTools}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="mb-4 flex items-center gap-3">
            <button
            //   onClick={handleLike}
            //   disabled={loadingLike}
              className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 disabled:opacity-50"
            >
              👍 Like {product.likes ? `(${product.likes})` : ""}
            </button>

            <button
            //   onClick={handleAddFavorite}
            //   disabled={favLoading}
              className="px-4 py-2 rounded bg-yellow-500 text-black hover:bg-yellow-600 disabled:opacity-50"
            >
              ⭐ Add to Favorites
            </button>
          </div>

          <div className="mt-6 border-t pt-4 flex items-center gap-4">
            <img
              src={product.photo}
              alt={product.artist_name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold">{product.artist_name}</div>
              <div className="text-sm text-gray-500">
                Total artworks: {product.totalArtworks ?? "—"}
              </div>
              <div className="text-xs text-gray-400">Created by: {product.created_by}</div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <div>Price: $ {product.price}</div>
            <div>Visibility: {product.visibility}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AllDatiels;
