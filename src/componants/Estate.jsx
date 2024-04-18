import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Estate = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetch("/nestFinder.json")
      .then((response) => response.json())
      .then((data) => setEstates(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (estates.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container w-full p-6 mx-auto space-y-6 sm:space-y-12">
        <h1 className="mx-auto text-4xl text-center">Estate</h1>
        <h4 className="text-center text-2xl">Explore Our Collection of Exceptional Properties</h4>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {estates.map((estate) => (
            <div key={estate.id} className="group">
              <Link to={`/nestFinder/${estate.id}`} className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
                <img src={estate.image} alt={estate.estate_title} className="w-full h-80 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{estate.estate_title}</h3>
                  <p className="text-gray-700 text-base mb-2">{estate.description}</p>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-gray-600">{estate.price}</p>
                    <div className={`text-sm px-2 py-1 rounded ${estate.status === 'sale' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>{estate.status}</div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{estate.area} - {estate.location}</p>
                  <ul className="flex mb-2">
                    {estate.facilities.map((facility, index) => (
                      <li key={index} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mr-1">{facility}</li>
                    ))}
                  </ul>
                  <Link to={`/nestFinder/${estate.id}`} className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    View Property
                  </Link>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Estate;
