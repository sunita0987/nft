// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import React from "react";


export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="src/assets/images/logo.png" alt="Logo" className="h-10" />
            <span className="text-xl font-bold text-blue-500">
              Events<span className="text-cyan-400">Free</span>
            </span>
          </div>
          <p className="text-sm text-white mb-4 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
          </p>
          {/* <div className="flex gap-4 text-lg">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div> */}
        </div>
        <div className="flex-1 grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-sm mb-2 text-white">
              SERVICES
            </h4>
            <ul className="space-y-1 text-sm text-white cursor-pointer">
              <li>About</li>
              <li>News</li>
              <li>uLoremcoper</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2 text-white">EVENTS</h4>
            <ul className="space-y-1 text-sm text-white cursor-pointer">
              <li>uLoremcoper</li>
              <li>uLoremcoper</li>
              <li>uLoremcoper</li>
              <li>uLoremcoper</li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-sm mb-2 text-white">GALLERY</h4>
          <div className="grid grid-cols-3 gap-3">
            <img
              src="src/assets/images/1st.png"
              alt="Gallery"
              className="h-16 w-30 object-cover"
            />
            <img
              src="src/assets/images/2nd.png"
              alt="Gallery"
              className="h-14 w-30 object-cover"
            />
            <img
              src="src/assets/images/3rd.png"
              alt="Gallery"
              className="h-14 w-30 object-cover"
            />
            <img
              src="src/assets/images/4th.png"
              alt="Gallery"
              className="h-14 w-30 object-cover"
            />
            <img
              src="src/assets/images/5th.png"
              alt="Gallery"
              className="h-14 w-30 object-cover"
            />
            <button className="h-14 w-30 bg-blue-700 text-sm text-white font-bold flex items-center justify-center">
              Show More
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-white text-xs mt-10">
        © Credits of companyName belong to companyName.
      </div>
    </footer>
  );
}
