 import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../context/Authprovider";
import { toast } from "react-toastify";
 

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
   
 

const [isUploading, setIsUploading] = useState(false);

const hendelFavorites = async () => {
  if (isUploading) {
    toast.info("Already uploading, please wait!");
    return;
  }

  setIsUploading(true); // prevent fast clicks

  try {
    const res = await fetch("http://localhost:3000/MyFavorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    const data = await res.json();

    if (data.exists) {
      toast.info("Already added to favorites!");
    } else {
      toast.success("Added to favorites successfully!");
    }

    console.log(data);
  } catch (error) {
    console.error("Error adding favorite:", error);
    toast.error("Something went wrong!");
  } finally {
    setIsUploading(false); 
  }
};

  return (
   <div className="min-h-screen bg-white dark:bg-gray-900 p-6 flex flex-col items-center">
  {/* Image */}
  <img
    src={product.imageURL || product.imageURL}
    alt={product.title || "Product Image"}
    className="w-full max-w-3xl p-4 max-h-[500px] object-contain rounded-lg shadow-lg mb-6"
  />

  {/* Card */}
  <div className="w-full max-w-3xl bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col gap-4">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.title || "Untitled"}</h1>

    <div className="flex flex-wrap gap-2">
      <span className="badge bg-pink-300">{product.category || "—"}</span>
      <span className="badge bg-gray-400">👍 {product.likes || 0}</span>
    </div>

    <p className="text-gray-700 dark:text-gray-200">{product.description || "No description available."}</p>

    {/* Buttons */}
    <div className="flex justify-between gap-4 mt-4 w-full">
      <button className="flex-1 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 disabled:opacity-50">
        👍 Like {product.likes ? `(${product.likes})` : ""}
      </button>

      <button
        onClick={hendelFavorites}
        className="flex-1 px-4 py-2 rounded bg-yellow-500 text-black hover:bg-yellow-600 disabled:opacity-50"
      >
        ⭐ Add to Favorites
      </button>
    </div>

    {/* Artist Info */}
    <div className="flex items-center gap-4 mt-4">
      <img
        src={product.photo || "https://via.placeholder.com/64"}
        alt={product.artist_name || "Artist"}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="font-semibold text-gray-900 dark:text-white">{product.artist_name || "Unknown Artist"}</span>
        <span className="text-sm text-gray-500 dark:text-gray-300">Total artworks: {product.totalArtworks ?? "—"}</span>
      </div>
    </div>

    {/* Optional: More details */}
    <div className="text-sm text-gray-600 dark:text-gray-300 mt-4 flex flex-wrap gap-2">
      {product.visibility && <span>Visibility: {product.visibility}</span>}
      {product.created_at && <span>Created at: {new Date(product.created_at).toLocaleDateString()}</span>}
      {product.price && <span>Price: ${product.price}</span>}
    </div>
  </div>
</div>

  );
};

export default AllDatiels;
