const PrincipalsSection: React.FC = () => {
  return (
    <section className="max-w-7xl w-full mx-auto font-Inter 2xl:rounded-[3rem] bg-gradient-to-r from-blue-100 to-yellow-100 overflow-hidden">
      <div className="grid md:grid-cols-7 2xl:grid-cols-3 justify-between items-end w-full overflow-hidden md:pt-4">
        {/* First Content - Full width on mobile, then col-span-2 */}
        <div className="md:col-span-2 2xl:col-span-1 text-center md:text-left max-sm:order-2">
          <img
            src="/images/Nabil.png"
            alt="Nabil Najjar"
            className="w-full max-w-sm mx-auto md:mx-0"
          />

          <div className="text-center py-6 md:pt-6 space-y-1 w-full bg-white">
            <div className="max-w-sm mr-auto">
              <h3 className="text-xl md:text-2xl text-black font-bold line-clamp-1 font-PTSerif italic">
                Nabil Najjar
              </h3>
              <p className="text-gray-600 text-base sm:text-lg line-clamp-1">
                Senior Associate
              </p>
            </div>
          </div>
        </div>

        {/* Center Content - Full width on mobile, then col-span-3 */}
        <div className="md:col-span-3 2xl:col-span-1 flex flex-col justify-center max-sm:h-full md:h-88 lg:h-105 xl:h-130 w-full bg-white max-sm:rounded-none rounded-t-[3rem] text-center text-black px-3 sm:px-6 py-4 sm:py-6 md:py-8 max-sm:order-1 md:order-2 mt-6 md:mt-0">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-PTSerif italic">
            Meet The <br className="hidden md:block" /> Associates
          </h2>
          <p className="py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eaque temporibus quae soluta, saepe molestias adipisci.
          </p>
        </div>

        {/* Last Content - Full width on mobile, then col-span-2 */}
        <div className="md:col-span-2 2xl:col-span-1 flex flex-col items-end order-3 md:order-3">
          <img
            src="/images/Pierre-Haddad.png"
            alt=" Dr. Pierre El Haddad"
            className="w-full rounded-2xl max-w-sm mx-auto md:mx-0"
          />
          <div className="text-center pt-6 w-full bg-white">
            <div className="max-w-sm ml-auto">
              <h3 className="text-xl md:text-2xl text-black font-bold line-clamp-1 font-PTSerif italic">
                Dr. Pierre El Haddad
              </h3>
              <p className="text-gray-600 text-base sm:text-lg line-clamp-1">
                Senior Associate MACH Consultants
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalsSection;
