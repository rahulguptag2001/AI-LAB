import apidata from "../utils/apidata";
import { useParams } from "react-router-dom";

export default function ModelPage() {
  const { id } = useParams();
  const model = apidata.find((model) => model.id == id); // Use loose comparison here

  if (!model) {
    return <div>Model not found</div>;
  }

  return (
    <div className="w-full h-auto my-32">
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="flex justify-center items-center h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="max-w-full max-h-full object-contain"
                  src={model.imageSrc}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <a href={model.tryOutLink} target="_blank"><button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Try out
                  </button>
                  </a>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {model.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {model.shortDesc}
              </p>
              <div className="flex mb-4 justify-around">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    $29.99
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Availability:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    In Stock
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Rating:
                </span>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">
                    ★★★★
                  </span>
                  <span className="text-white-500">
                    ★
                  </span>
                </div>
              </div>


              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {model.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
