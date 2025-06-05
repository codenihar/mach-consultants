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
    <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-7 items-end w-full bg-gradient-to-r from-blue-100 to-yellow-100 rounded-2xl md:rounded-[3rem] overflow-hidden pt-6 sm:pt-8 md:pt-10">
        {/* First Content - Full width on mobile, then col-span-2 */}
        <div className="col-span-1 md:col-span-2 text-center md:text-left space-y-2 sm:space-y-3 md:space-y-4 order-1">
          <img
            src="/images/author_2.png"
            alt="Jay Britto"
            className="w-full max-w-xs mx-auto md:mx-0"
          />
        </div>

        {/* Center Content - Full width on mobile, then col-span-3 */}
        <div className="col-span-1 md:col-span-3 bg-white rounded-t-xl md:rounded-t-4xl text-center text-black px-3 sm:px-6 pt-6 sm:pt-8 md:pt-10 order-3 md:order-2">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              MEET THE
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              PRINCIPALS
            </h2>
          </div>
          <div className="my-4 sm:my-6 md:my-8">
            <img
              src="/images/aboutHero_1.png"
              alt="Room"
              className="h-16 sm:h-20 w-full object-cover rounded-xl sm:rounded-2xl md:rounded-4xl"
            />
          </div>
          <p className="text-gray-700 text-xs sm:text-sm max-w-md mx-auto pb-6 sm:pb-8 md:pb-0 line-clamp-4">
            As principal and licensed designer, the founder oversees the
            day-to-day operations of Britto Charette and the design and
            manufacture of our firm's custom furniture and award-winning
            accessories.
          </p>
        </div>

        {/* Last Content - Full width on mobile, then col-span-2 */}
        <div className="col-span-1 md:col-span-2 space-y-2 sm:space-y-3 md:space-y-4 order-2 md:order-3">
          <img
            src="/images/author_1.png"
            alt="David Charette"
            className="w-full max-w-xs mx-auto md:mx-0"
          />
        </div>
      </div>

      {/* Names Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6 md:py-8 gap-4 sm:gap-0">
        <div className="text-center sm:text-left space-y-1 w-full sm:w-auto">
          <h3 className="text-2xl sm:text-3xl md:text-3xl text-black font-bold">
            Jay Britto
          </h3>
          <p className="text-gray-600 text-base sm:text-lg">
            FOUNDER AND PRINCIPAL
          </p>
        </div>

        <div className="text-center sm:text-right space-y-1 w-full sm:w-auto">
          <h3 className="text-2xl sm:text-3xl md:text-3xl text-black font-bold">
            David Charette
          </h3>
          <p className="text-gray-600 text-base sm:text-lg">
            FOUNDER AND PRINCIPAL
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrincipalsSection;
