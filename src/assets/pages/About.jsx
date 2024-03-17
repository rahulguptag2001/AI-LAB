import aboutlogo from "../img/aboutlogo.png";

export default function About() {
  return (
    <div className="w-full h-auto py-16">
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src={aboutlogo} alt="Company Logo" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-indigo-600">Ai ModelHub</span>
            </h2>
            <p className="text-gray-700">
            Welcome to our AI Model Collection website, where innovation meets exploration. 
            Dive into a world of cutting-edge technology as we curate a diverse range of AI 
            models for your exploration. From image recognition to natural language processing, 
            our platform showcases the latest advancements in artificial intelligence. Join us 
            on a journey of discovery as we empower developers and enthusiasts alike to harness 
            the power of AI for transformative solutions. Explore, learn, and unleash the potential 
            of AI with us.<br></br>
            </p>
            <h1>By Rahul Gupta</h1> 
          </div>
        </div>
      </div>
    </div>
  );
}
