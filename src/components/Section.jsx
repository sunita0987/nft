import React from "react";
// import { FaQuoteLeft, FaPlay } from "react-icons/fa";

const Section = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-white">
      <div className="md:w-1/2 space-y-4 text-gray-600">
        {/* <FaQuoteLeft className="text-blue-600 text-6xl" /> */}
        <p>
          Semper faucibus suscipit ultricies eleifend semper sit tellus gravida
          pretium. Cras cursus ut semper eleifend tortor lectus tristique
          turpis. Laoreet amet ultrices est lectus accumsan nibh cursus nunc.
          Faucibus orci, neque, pretium, massa volutpat convallis nisl
          pellentesque. Gravida in ultricies vitae tortor. Dignissim viverra
          volutpat neque gravida aliquet urna faucibus viverra vulputate.
        </p>
        <p>
          Nibh cursus nunc. Faucibus orci, neque, pretium, massa volutpat
          convallis nisl pellentesque. Gravida in ultricies vitae tortor.
          Dignissim viverra volutpat neque gravida aliquet urna faucibus viverra
          vulputate.
        </p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src="src/assets/images/video.png"
            alt="Event"
            className="w-[400px] h-auto objetct-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            {/* <FaPlay className="text-white text-4xl cursor-pointer" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
