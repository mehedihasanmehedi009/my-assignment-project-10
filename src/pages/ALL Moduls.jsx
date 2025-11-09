 
import { useLoaderData } from 'react-router';
import Allcard from '../components/Allcard';

const ALLModuls = () => {
    const data= useLoaderData()
    return (
         <div className="">
  <div className="p-5 mt-20 text-center text-3xl md:text-5xl font-bold">
    Latest Doors
  </div>

  <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-8/12 mx-auto">
    {data?.length > 0 ? (
      data.map((model) => <Allcard key={model._id} model={model} />)
    ) : (
      <p className="text-center mt-4">No models found</p>
    )}
  </div>
</div>

    );
};

export default ALLModuls;