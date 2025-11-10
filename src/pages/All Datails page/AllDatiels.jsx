 import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../context/Authprovider";

const AllDatiels = () => {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6 flex flex-col items-center">
      {/* Image */}
      <img
        src={product.
imageURL || product.imageURL  }
        alt={product.title || "Product Image"}
        className="w-full p-4 max-h-[500px] object-contain rounded-lg shadow-lg mb-6"
      />

      {/* Text Section */}
      <div className="w-full bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          {product.title || "Untitled"}
        </h1>

        <p className="text-sm mb-4 font-bold text-gray-700 dark:text-gray-300">
          Category: {product.category || "—"}  
        </p>

        <div className="mb-4 w-full">
          <h3 className="font-semibold text-gray-900 dark:text-white">Medium / Tools</h3>
          <p className="text-gray-700 dark:text-gray-200">{product.mediumTools || product.Medium || "—"}</p>
        </div>

        <div className="mb-4 w-[400PX]">
          <h3 className="font-semibold text-gray-900 dark:text-white">Description</h3>
          <p className="text-gray-700 dark:text-gray-200">{product.description || "No description available."}</p>
        </div>

        {/* Buttons */}
        <div className="mb-6 flex gap-3">
          <button className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 disabled:opacity-50">
            👍 Like {product.likes ? `(${product.likes})` : ""}
          </button>

          <button className="px-4 py-2 rounded bg-yellow-500 text-black hover:bg-yellow-600 disabled:opacity-50">
            ⭐ Add to Favorites
          </button>
        </div>

        {/* Artist Info */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <img
            src={product.photo || user.photoURL || "https://via.placeholder.com/64"}
            alt={product.artist_name || user.displayName || "Artist"}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-center">
            <div className="font-semibold text-lg text-gray-900 dark:text-white">
              {product.artist_name || user.displayName || "Unknown Artist"}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-300">
              Total artworks: {product.totalArtworks ?? "—"}
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-400">
              Created by: {product.created_by || "—"}
            </div>
          </div>
        </div>

        {/* Optional: Price, Visibility, Created at */}
        {(product.price || product.visibility || product.created_at) && (
          <div className="mt-4 text-sm flex flex-col items-center gap-1 text-gray-600 dark:text-gray-300">
            {product.visibility && <div>Visibility: {product.visibility}</div>}
             
            {product.created_at && (
              <div>Created at: {new Date(product.created_at).toLocaleDateString()}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDatiels;
