import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-neutral-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mb-8">
          Muthsaal: Digitising{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            Financial Access to the Underserved
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-50 max-w-4xl">
          Revolutionizing Traditional 'Ajo' Savings Through Digital Financial
          Access for Market Traders in Ibadan and providing a secure,
          transparent and user-friendly platform that preserves local practices
          while expanding financial access.
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-blue-500 to-blue-800 text-white py-3 px-4 mx-3 rounded-md"
          >
            Get Started
          </a>
          <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Documentation
          </a>
        </div>
        <div className="flex mt-10 justify-center">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-blue-700 shadow-blue-700"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-blue-700 shadow-blue-700"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
