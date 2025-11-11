 import { useLoaderData } from "react-router";
import { useState } from "react";
import Allcard from "../components/Allcard";

const ALLModuls = () => {
  const data = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  // Search handler
  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchText.trim()) {
      setFilteredData(data);
      return;
    }

    // Optional: search from backend if you want live DB search
    // fetch(`http://localhost:3000/search?search=${encodeURIComponent(searchText)}`)
    //   .then((res) => res.json())
    //   .then((result) => setFilteredData(result));

    // For now: simple local search
    const result = data.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(result);
  };

  return (
    <div className="">
      {/* Title */}
      <div className="p-5 mt-20 text-center">
        <h1 className="text-2xl md:text-5xl font-bold">ALL Arts</h1>
        <span className="text-2xl font-semibold text-gray-500">
          Explore All Arts
        </span>
      </div>

      {/* Search box */}
      <form
        onSubmit={handleSearch}
        className="flex justify-center gap-3 mt-6 w-10/12 mx-auto"
      >
        <input
          type="text"
          placeholder="Search artworks..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full md:w-1/2 rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          type="submit"
          className="btn bg-gradient-to-r from-pink-500 to-green-400 text-white rounded-full px-6"
        >
          Search
        </button>
      </form>

      {/* All cards */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-10/12 mx-auto">
        {filteredData?.length > 0 ? (
          filteredData.map((model) => (
            <Allcard key={model._id} model={model} />
          ))
        ) : (
          <p className="text-center mt-4 text-gray-500 font-semibold">
            No artworks found
          </p>
        )}
      </div>
    </div>
  );
};

export default ALLModuls;
