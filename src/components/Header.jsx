import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="max-w-6xl mx-auto p-6 flex flex-col lg:flex-row gap-8 mt-15">
        <div>
          <img
            src="src/assets/images/home.png"
            alt="User"
            className="rounded-2xl w-[450px] h-[450px] object-cover"
          />
        </div>
        <div className="flex-1">
          <nav className="text-regular  text-gray-500 mb-2">Home &gt; Feed</nav>

          <h1 className="text-5xl font-semibold mb-5 font-poppins">Jhone Doe</h1>

          <p className="text-gray-600 mb-10 font-poppins">
            Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.
            Senectus gravida sed interdum pretium at quam morbi. Nunc, libero
            nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit.
            Ut vitae dolor fringilla urna eget aliquet.
          </p>

          <h2 className="font-semibold text-gray-800 mb-2 font-poppins">
            Following Events :
          </h2>
          <div className="flex gap-6 overflow-x-auto">
            <div className="bg-white shadow-md rounded-xl p-1 w-70 h-50">
              <img
                src="src/assets/images/left.png"
                className="rounded-md mb-2"
                alt="Event"
              />
              <h3 className="font-semibold text-sm ">Augue etiam</h3>
              <p className="text-xs text-gray-500 font-poppins">
                Quis et id urna sagittis. Enim lacus, felis, libero sed nisl
                vitae blandit sociis.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-2 w-70 h-50">
              <img
                src="src/assets/images/right.png"
                className="rounded-md mb-2"
                alt="Event"
              />
              <h3 className="font-semibold text-sm font-poppins">Augue etiam</h3>
              <p className="text-xs text-gray-500 font-poppins">
                Quis et id urna sagittis. Enim lacus, felis, libero sed nisl
                vitae blandit sociis.
              </p>
            </div>
            <Link
              to="/events"
              className="bg-indigo-100 text-gray-400 font-semibold text-center rounded-xl flex items-center justify-center w-20 h-20"
            >
              +15 <br /> more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
