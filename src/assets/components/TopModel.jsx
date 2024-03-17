import apidata from "../utils/apidata";
import { Link } from "react-router-dom";

const data = apidata;
console.log(data);

export default function TopModel() {
  return (
    <div className="bg-gray-100 min-w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Best Models</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {data.slice(0, 3).map((model) => (
              <div key={model.name} className="group relative rounded-lg border border-gray-200 overflow-hidden bg-white hover:shadow-xl transition duration-300 ease-in-out px-4 py-4">
                <div className="group relative rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition duration-300 ease-in-out">
                  <img
                    src={model.imageSrc}
                    alt={model.imageAlt}
                    className="h-full w-full object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link to={model.href}>
                    <span className="absolute inset-0" />
                    {model.name}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {model.shortDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
