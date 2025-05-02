import { useState } from "react";
import React from "react";
// import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaPaperPlane, FaRegFileAlt } from 'react-icons/fa';

const User = () => {
  const [showJourney, setShowJourney] = useState(true);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex gap-6">
        {/* Image */}
        <div className="w-1/3">
          <img
            src="src/assets/images/show.png"
            alt="event"
            className="rounded-xl object-cover h-full"
          />
        </div>
        <div className="w-2/3">
          <div className="text-sm text-gray-400 mb-5">Home &gt; Username</div>
          <h1 className="text-5xl font-semibold mb-10">Jhone Doe</h1>

          <p className="text-gray-600 mb-4">
            Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.
            Senectus gravida sed interdum pretium at quam morbi. Nunc, libero
            nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit.
            Ut vitae dolor fringilla urna eget aliquet.
          </p>
          <div className="flex gap-2 mb-4">
            <button
              className="bg-blue-100 text-black px-4 py-2 rounded-4xl"
              onClick={() => setShowJourney(false)}
            >
              Unshow Journey of Feed
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-4xl"
              onClick={() => setShowJourney(true)}
            >
              Show Journey of Feed
            </button>
          </div>
          <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
            <span className="flex items-center gap-1"> 10/02/2022</span>
            <span className="flex items-center gap-1"> Mumbai</span>
            <span className="flex items-center gap-1"> 1,080</span>
            <span className="flex items-center gap-1"> 1,080</span>
            <span className="flex items-center gap-1"> 1,080</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
