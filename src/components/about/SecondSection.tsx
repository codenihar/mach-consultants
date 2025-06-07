// const PrincipalsSection: React.FC = () => {
//   return (
//     <section className="max-w-7xl w-full mx-auto">
//       <div className="grid grid-cols-1  md:grid-cols-7 items-center w-full bg-gradient-to-r from-blue-100 to-yellow-100 rounded-[3rem] overflow-hidden pt-10">
//         {/* First Content */}
//         <div className="col-span-2 text-center md:text-left space-y-4">
//           <img src="/images/author_2.png" alt="Jay Britto" className="w-full" />
//         </div>

//         {/* Center Content */}
//         <div className="col-span-3 bg-white rounded-t-4xl text-center text-black px-10 pt-10">
//           <div className="space-y-6">
//             <h2 className="text-4xl md:text-6xl font-bold">MEET THE</h2>
//             <h2 className="text-4xl md:text-6xl font-bold">PRINCIPALS</h2>
//           </div>
//           <div className="my-8">
//             <img
//               src="/images/aboutHero_1.png"
//               alt="Room"
//               className="h-20 w-full object-cover rounded-4xl"
//             />
//           </div>
//           <p className="text-gray-700 text-sm max-w-md mx-auto">
//             As principal and licensed designer, the founder oversees the
//             day-to-day operations of Britto Charette and the design and
//             manufacture of our firm’s custom furniture and award-winning
//             accessories.
//           </p>
//         </div>

//         {/* Last Content */}
//         <div className="col-span-2 space-y-4">
//           <img
//             src="/images/author_1.png"
//             alt="David Charette"
//             className="w-full"
//           />
//         </div>
//       </div>

//       <div className="flex justify-between items-center py-8">
//         <div className="text-left space-y-1">
//           <h3 className="text-4xl text-black font-bold">Jay Britto</h3>
//           <p className="text-gray-600 text-xl">FOUNDER AND PRINCIPAL</p>
//         </div>

//         <div className="text-right space-y-1">
//           <h3 className="text-4xl text-black font-bold">David Charette</h3>
//           <p className="text-gray-600 text-xl">FOUNDER AND PRINCIPAL</p>
//         </div>
//       </div>
//     </section>
//   );
// };

const PrincipalsSection: React.FC = () => {
  return (
    <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 font-LibreRegular xl:rounded-[3rem] bg-gradient-to-r from-blue-100 to-yellow-100">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 w-full overflow-hidden py-6 sm:py-8 md:py-10">
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="custom-shape" clipPathUnits="objectBoundingBox">
              <path d="M0.782 0.0027H0.221C0.196 0.0027 0.1756 0.023 0.1756 0.048V0.1203C0.1756 0.1453 0.1552 0.1657 0.130 0.1657H0.048C0.023 0.1657 0.0027 0.1861 0.0027 0.211V0.7437C0.0027 0.7686 0.023 0.789 0.048 0.789H0.130C0.1552 0.789 0.1756 0.8094 0.1756 0.8344V0.9429C0.1756 0.9679 0.196 0.9883 0.221 0.9883H0.782C0.807 0.9883 0.8274 0.9679 0.8274 0.9429V0.8344C0.8274 0.8094 0.8478 0.789 0.873 0.789H0.9515C0.9765 0.789 0.9969 0.7686 0.9969 0.7437V0.211C0.9969 0.1861 0.9765 0.1657 0.9515 0.1657H0.873C0.8478 0.1657 0.8274 0.1453 0.8274 0.1203V0.048C0.8274 0.023 0.807 0.0027 0.782 0.0027Z" />
            </clipPath>
          </defs>
        </svg>

        {/* First Content - Full width on mobile, then col-span-2 */}
        <div className="flex-1 text-center md:text-left space-y-2 sm:space-y-3 md:space-y-4 order-1">
          <img
            src="https://mach-consultants.com/wp-content/uploads/2022/04/Nabil-Photo-1-scaled.jpg"
            alt="Nabil Najjar"
            className="w-full rounded-2xl max-w-xs mx-auto md:mx-0"
          />
          <div className="text-center space-y-1 w-full max-w-xs">
            <h3 className="text-xl md:text-2xl text-black font-bold line-clamp-1">
              Nabil Najjar
            </h3>
            <p className="text-gray-600 text-base sm:text-lg line-clamp-1">
              Senior Associate
            </p>
          </div>
        </div>

        {/* Center Content - Full width on mobile, then col-span-3 */}
        <div
          style={{
            clipPath: "url(#custom-shape)",
            WebkitClipPath: "url(#custom-shape)",
          }}
          className="flex-1 w-full bg-white rounded-xl md:rounded-t-4xl text-center text-black px-3 sm:px-6 py-4 sm:py-6 md:py-8 order-2 md:order-2 my-6 md:my-0"
        >
          <div className="space-y-3">
            <h2 className="text-2xl lg:text-5xl font-bold font-LibreBold">
              Meet The <br /> Associates
            </h2>
          </div>
        </div>

        {/* Last Content - Full width on mobile, then col-span-2 */}
        <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4 order-3 md:order-3">
          <img
            src="https://mach-consultants.com/wp-content/uploads/2023/09/Pierre-Haddad.-resizedjpg.jpg"
            alt=" Dr. Pierre El Haddad"
            className="w-full rounded-2xl max-w-xs mx-auto md:mx-0"
          />
          <div className="text-center space-y-1 max-w-xs w-full">
            <h3 className="text-xl md:text-2xl text-black font-bold line-clamp-1">
              Dr. Pierre El Haddad
            </h3>
            <p className="text-gray-600 text-base sm:text-lg line-clamp-1">
              Senior Associate MACH Consultants
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalsSection;
