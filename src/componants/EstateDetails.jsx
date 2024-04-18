import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EstateDetails = () => {
  const { id } = useParams();
  const [estate, setEstate] = useState(null);

  useEffect(() => {
    fetch("/nestFinder.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedEstate = data.find((estate) => estate.id === parseInt(id));
        setEstate(selectedEstate);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!estate) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dark:bg-gray-100 dark:text-gray-800">
      <section className="bg-blue-500 text-white py-6">
        {/* Banner */}
      <div className="bg-gray-900 text-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{estate.estate_title}</h1>
          <p className="text-lg">{estate.description}</p>
        </div>
      </div>
      </section>

      <div className="container mx-auto px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex mt-8">
          <div className="md:w-1/2 p-4">
            <img src={estate.image} alt={estate.estate_title} className="w-full h-auto rounded-lg" />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{estate.estate_title}</h2>
            <div className="text-gray-600 mb-4">
              <p><span className="font-bold">Price:</span> {estate.price}</p>
              <p><span className="font-bold">Status:</span> {estate.status}</p>
              <p><span className="font-bold">Area:</span> {estate.area}</p>
              <p><span className="font-bold">Location:</span> {estate.location}</p>
            </div>
            <div className="text-gray-600 mb-4">
              <p className="font-bold">Facilities:</p>
              <ul>
                {estate.facilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
