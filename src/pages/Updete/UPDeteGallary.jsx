
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
const UPDeteGallary = ( ) => {
  const card = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const updated = {
      title: e.target.title.value,
      description: e.target.description.value,
      imageURL: e.target.imageURL.value,
      category: e.target.category.value,
      mediumTools: e.target.mediumTools.value,
      totalArtworks: e.target.totalArtworks.value,
    };
    fetch(`http://localhost:3000/mygallry/${card._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
         Swal.fire("Updated!", "Your artwork has been updated.", "success");
      })
      
      
  };

  if (!card) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 p-4">
      <div className="card w-full max-w-md bg-gray-100 dark:bg-gray-800 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700">
        <div className="card-body p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Update Artwork
          </h2>

          <form className="space-y-4" onSubmit={handleUpdate}>
            <input type="text" name="title" defaultValue={card.title} placeholder="Title" className="input w-full" />
            <select name="category" defaultValue={card.category} className="select w-full">
              <option value="Vehicles">Vehicles</option>
              <option value="Plants">Plants</option>
              <option value="Home & Living">Home & Living</option>
              <option value="Characters">Characters</option>
              <option value="Space">Space</option>
              <option value="Animals">Animals</option>
              <option value="Other">Other</option>
            </select>
            <input type="text" name="mediumTools" defaultValue={card.mediumTools} placeholder="Tools" className="input w-full" />
            <input type="text" name="totalArtworks" defaultValue={card.totalArtworks} placeholder="Total Artworks" className="input w-full" />
            <textarea name="description" defaultValue={card.description} placeholder="Description" className="textarea w-full" />
            <input type="url" name="imageURL" defaultValue={card.imageURL} placeholder="Image URL" className="input w-full" />

            <button type="submit" className="btn w-full mt-4">
              Update Card
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UPDeteGallary;
