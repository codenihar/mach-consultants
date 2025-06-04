import { MoveUpRight } from "lucide-react";
import React from "react";

// const HeroSection: React.FC = () => {
//   return (
//     <section className="w-full min-h-screen flex items-center bg-gradient-to-r from-blue-100 to-yellow-100 px-6 md:px-16 py-10">
//       <div className="pb-42 pt-30 max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-20 font-bold">
//         {/* Left Section */}
//         <div className="flex-1">
//           <h1 className="font-SFheavy text-4xl md:text-7xl font-bold text-gray-900 mb-6">
//             Highest Quality
//             <br />
//             Insurance at the
//             <br />
//             <span className="text-blue-600">lowest rates</span>
//             <br />
//             available.
//           </h1>

//           <p className="text-gray-600 text-lg my-8">
//             We have access to the majority of the first-rate insurance companies
//             in Texas to offer you the best coverage at the lowest available
//             price.
//           </p>

//           <div className="flex gap-2">
//             <input
//               type="text"
//               placeholder="Enter Zip Code"
//               className="px-4 py-3 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 placeholder:text-gray-400 text-black"
//             />
//             <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition cursor-pointer">
//               Request a Quote
//               <MoveUpRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="relative flex-1 flex justify-end">
//           <div className="relative w-full h-full mx-auto lg:mx-0 rounded-[3rem] overflow-hidden">
//             <div className="w-full h-full shadow-lg">
//               <img
//                 src="/images/hero.png"
//                 alt="Family with insurance"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const HeroSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex items-center bg-gradient-to-r from-blue-100 to-yellow-100 px-4 sm:px-6 md:px-8 lg:px-16 pt-24 pb-48 md:pt-36 md:pb-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20 w-full">
        {/* Left Section */}
        <div className="flex-1 w-full mt-8 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Highest Quality
            <br />
            Insurance at the
            <br />
            <span className="text-blue-600">lowest rates</span>
            <br />
            available.
          </h1>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl my-4 sm:my-6 md:my-8 max-w-2xl">
            We have access to the majority of the first-rate insurance companies
            in Texas to offer you the best coverage at the lowest available
            price.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md">
            <input
              type="text"
              placeholder="Enter Zip Code"
              className="px-4 py-3 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64 placeholder:text-gray-400 text-black"
            />
            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition cursor-pointer w-full sm:w-auto">
              Request a Quote
              <MoveUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-none mx-auto lg:mx-0 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-lg">
            <img
              src="/images/hero.png"
              alt="Family with insurance"
              className="w-full h-auto object-cover aspect-square sm:aspect-video lg:aspect-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
