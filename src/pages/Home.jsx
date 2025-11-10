 






import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import { ModelCard } from "../components/Modelsix";

const Homes = () => {
  const data = useLoaderData();

  // Dummy top artists data
  const topArtists = [
        {
        name: "Ayesha Rahman",
        image: "https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=612x612&w=0&k=20&c=9imIwWTJpXEQGM6sUie2zeO7sKBQiSvpmkopyjv3ZdM=",
        specialty: "Digital Painting",
      },
      {
        name: "Rifat Khan",
        image: "https://img.freepik.com/free-photo/handsome-young-cheerful-man-with-arms-crossed_171337-1073.jpg?semt=ais_hybrid&w=740&q=80",
        specialty: "Door Modeling",
      },
      {
        name: "Tanjim Alam",
        image: "https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740&q=80",
        specialty: "Character Design",
      },
  ];

  const highlights = [
    {
      title: "Community Art Challenge",
      desc: "Join our November art challenge and showcase your creativity!",
      image: "https://i.ibb.co.com/kcmnM5y/art-event.jpg",
    },
    {
      title: "New Artist Meetup",
      desc: "Our community meetup featured 20+ amazing digital artists.",
      image: "https://i.ibb.co.com/CB8qPQX/community.jpg",
    },
  ];

  return (
    <div>
      <Banner />

      {/* Latest Models Section */}
  <div className=" p-5  mt-20 text-center text-3xl md:text-5xl font-bold text-gray-600 ">
        Latest Doors
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10  w-8/12 mx-auto">
        {data?.length > 0 ? (
          data.map((model) => <ModelCard key={model._id} model={model} />)
        ) : (
          <p className="text-center mt-4">No models found</p>
        )}
      </div>

      {/* 🔹 Top Artists of the Week Section */}
      <section className="my-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-pink-600">
          🎨 Top Artists of the Week
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 w-8/12 mx-auto">
          {topArtists.map((artist, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {artist.name}
              </h3>
              <p className="text-sm text-gray-500">{artist.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Community Highlights Section */}
 <section className="my-20 text-center bg-gradient-to-r from-blue-100 to-pink-100 py-16">
  <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-700">
    💬 Community Highlights
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-10/12 mx-auto">
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300">
      <img
        src="https://www.artfund.org/_amplify/image?format=jpeg&q=75&url=https%3A%2F%2Fd3ir5jsauc24hh.cloudfront.net%2F96C80C1D-2388-4F86-AA6F5044DBACBC01%2F1c1962d1c7e150450b2273d309ee31e7-xl.jpg&w=1536"
        alt="Art Gallery"
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-left">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Community Art Challenge
        </h3>
        <p className="text-gray-600">
          Join our November art challenge and showcase your creativity!
        </p>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300">
      <img
        src="https://artscouncil-ni.s3-assets.com/_930x600_crop_center-center_100_none/93778/digital-art-showcase-2025-the-mac.jpg"  // ✅ working test image
        alt="Artist Meetup"
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-left">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          New Artist Meetup
        </h3>
        <p className="text-gray-600">
          Our community meetup featured 20+ amazing digital artists.
        </p>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default Homes;
