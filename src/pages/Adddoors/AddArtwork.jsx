 import { useContext, useState } from "react";
import { AuthContext } from "../../context/Authprovider";
import { toast } from "react-toastify";

const AddArtwork = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const totalArtworksValue = e.target.totalArtworks.value;
    if (isNaN(totalArtworksValue)) {
      toast.error("Total Artworks must be a number!");
      setLoading(false);
      return;
    }

    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      imageURL: e.target.imageURL.value,
      mediumTools: e.target.mediumTools.value,
      totalArtworks: Number(totalArtworksValue),
      created_at: new Date().toISOString(),
      created_by: user.email,
      Visibility: "Public",
    };

    try {
      const res = await fetch("http://localhost:3000/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to add model");

      const data = await res.json();
      toast.success("Successfully added!");
      e.target.reset();
      console.log(data);
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 p-4">
      <div className="card w-full max-w-md bg-gray-100 dark:bg-gray-800 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700">
        <div className="card-body p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Add New Model
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="label font-medium text-gray-900 dark:text-gray-200">Name</label>
              <input
                type="text"
                name="title"
                required
                placeholder="Enter name"
                className="input w-full rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Category */}
            <div>
              <label className="label font-medium text-gray-900 dark:text-gray-200">Category</label>
              <select
                defaultValue={""}
                name="category"
                required
                className="select w-full rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="" disabled>Select category</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Plants">Plants</option>
                <option value="Home & Living">Home & Living</option>
                <option value="Characters">Characters</option>
                <option value="Space">Space</option>
                <option value="Animals">Animals</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Tools */}
            <div>
              <label className="label font-medium text-gray-900 dark:text-gray-200">Tools</label>
              <input
                type="text"
                name="mediumTools"
                required
                placeholder="Enter Tools"
                className="input w-full rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Total Artworks */}
            <div>
              <label className="label font-medium text-gray-900 dark:text-gray-200">Total Artworks</label>
              <input
                type="text"
                name="totalArtworks"
                required
                placeholder="Enter total artworks"
                className="input w-full rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Description */}
            <div>
              <label className="label font-medium text-gray-900 dark:text-gray-200">Description</label>
              <textarea
                name="description"
                required
                rows="5"
                placeholder="Enter description"
                className="textarea w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              ></textarea>
            </div>

            {/* Thumbnail */}
            <div>
              <label className="label font-medium text-gray-900 dark:text-gray-200">Thumbnail URL</label>
              <input
                type="url"
                name="imageURL"
                required
                placeholder="https://example.com/image.jpg"
                className="input w-full rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`btn w-full text-white mt-6 rounded-full bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? "Adding..." : "Add Model"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArtwork;
