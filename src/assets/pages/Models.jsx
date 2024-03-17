import apidata from "../utils/apidata";
import { Link } from "react-router-dom";

const data = apidata;
export default function Models() {
  return (
    <div className="isolate bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="pt-10 text-5xl  tracking-tight text-gray-900">
          AI Models
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((model) => (
            <div key={model.id} className="group relative rounded-lg  overflow-hidden bg-white hover:shadow-xl transition duration-300 ease-in-out px-4 py-4">
              <div className="group relative rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition duration-300 ease-in-out">
                <img
                  src={model.imageSrc}
                  alt={model.shortDesc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-fancy text-black-700">
                    <Link to={`/model/${model.id}`}>
                      {/* Pass the id as a parameter */}
                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                      {model.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{model.rating}</p>
                </div>
                <p className="text-sm font-medium text-gray-900 mt-2">
                  {model.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}