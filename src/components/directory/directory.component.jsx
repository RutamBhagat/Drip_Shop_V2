const Directory = ({ categories }) => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="mx-0 md:mx-5 lg:mx-12 px-5 py-24 flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">
            All Ready-To-Wear
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            We put our distinctive and visionary mark on DripShop’s
            ready-to-wear. Our innovative designs create a complete contemporary
            wardrobe: from reimagined staples to unexpected silhouettes, from
            casualwear to evening looks. Each collection is infused by a modern
            creativity that (re)defines elegance for the 21st century folks.
          </p>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="flex flex-wrap w-full lg:w-1/2">
            <div
              className="border border-white hover:cursor-pointer hover:scale-105 ease-in-out duration-1000  00 mt-2 m-2 md:ml-2 md:mr-auto w-full md:w-[48%] h-[40vw] md:h-[25vw] bg-center bg-cover bg-no-repeat flex justify-center items-center md:justify-start md:items-end"
              style={{
                backgroundImage: `url(${categories[0].imageUrl})`,
              }}
            >
              <div className="rounded-lg md:rounded-none md:rounded-tr-[20px] w-1/3 lg:w-3/5 h-1/2 md:h-1/3 flex flex-col justify-center text-center text-white text-opacity-50 bg-black border border-white opacity-70 hover:opacity-80 content-center">
                <h2 className="text-2xl sm:text-3xl ">
                  {categories[0].title.toUpperCase()}
                </h2>
                <p>Shop Now</p>
              </div>
            </div>
            <div
              className="border border-white hover:cursor-pointer hover:scale-105 ease-in-out duration-1000  00 mt-2 m-2 md:mr-2 md:ml-auto w-full md:w-[48%] h-[40vw] md:h-[25vw] bg-center bg-cover bg-no-repeat flex justify-center items-center md:justify-end md:items-end"
              style={{
                backgroundImage: `url(${categories[1].imageUrl})`,
              }}
            >
              <div className="rounded-lg md:rounded-none md:rounded-tl-[20px] w-1/3 lg:w-3/5 h-1/2 md:h-1/3 flex flex-col justify-center text-center text-white text-opacity-50 bg-black border border-white opacity-70 hover:opacity-80 content-center">
                <h2 className="text-2xl sm:text-3xl ">
                  {categories[1].title.toUpperCase()}
                </h2>
                <p>Shop Now</p>
              </div>
            </div>
            <div
              className="border border-white hover:cursor-pointer hover:scale-105 ease-in-out duration-1000  00 m-2 w-full h-[40vw] lg:h-[25vw] bg-center bg-cover bg-no-repeat flex justify-center items-center md:items-end"
              style={{
                backgroundImage: `url(${categories[2].imageUrl})`,
              }}
            >
              <div className="rounded-lg md:rounded-none md:rounded-t-[20px] w-1/3 h-1/2 md:h-1/3 flex flex-col justify-center text-center text-white text-opacity-50 bg-black border border-white opacity-70 hover:opacity-80 content-center">
                <h2 className="text-2xl sm:text-3xl ">
                  {categories[2].title.toUpperCase()}
                </h2>
                <p>Shop Now</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full lg:w-1/2">
            <div
              className="border border-white hover:cursor-pointer hover:scale-105 ease-in-out duration-1000  00 m-2 w-full h-[40vw] lg:h-[25vw] bg-center bg-cover bg-no-repeat flex justify-center items-center md:items-end"
              style={{
                backgroundImage: `url(${categories[3].imageUrl})`,
              }}
            >
              <div className="rounded-lg md:rounded-none md:rounded-t-[20px] w-1/3 h-1/2 md:h-1/3 flex flex-col justify-center text-center text-white text-opacity-50 bg-black border border-white opacity-70 hover:opacity-80 content-center">
                <h2 className="text-2xl sm:text-3xl ">
                  {categories[3].title.toUpperCase()}
                </h2>
                <p>Shop Now</p>
              </div>
            </div>
            <div
              className="border border-white hover:cursor-pointer hover:scale-105 ease-in-out duration-1000  00 mt-2 m-2 md:ml-2 md:mr-auto w-full md:w-[48%] h-[40vw] md:h-[25vw] bg-center bg-cover bg-no-repeat flex justify-center items-center md:justify-start md:items-end"
              style={{
                backgroundImage: `url(${categories[4].imageUrl})`,
              }}
            >
              <div className="rounded-lg md:rounded-none md:rounded-tr-[20px] w-3/5 sm:w-1/3 md:w-3/5 lg:w-4/5 h-1/2 md:h-1/3 flex flex-col justify-center text-center text-white text-opacity-50 bg-black border border-white opacity-70 hover:opacity-80 content-center">
                <h2 className="text-2xl sm:text-3xl ">
                  {categories[4].title.toUpperCase()}
                </h2>
                <p>Shop Now</p>
              </div>
            </div>
            <div
              className="border border-white hover:cursor-pointer hover:scale-105 ease-in-out duration-1000  00 mt-2 m-2 md:mr-2 md:ml-auto w-full md:w-[48%] h-[40vw] md:h-[25vw] bg-center bg-cover bg-no-repeat flex justify-center items-center md:justify-end md:items-end"
              style={{
                backgroundImage: `url(${categories[5].imageUrl})`,
              }}
            >
              <div className="rounded-lg md:rounded-none md:rounded-tl-[20px] w-1/3 lg:w-3/5 h-1/2 md:h-1/3 flex flex-col justify-center text-center text-white text-opacity-50 bg-black border border-white opacity-70 hover:opacity-80 content-center">
                <h2 className="text-2xl sm:text-3xl ">
                  {categories[5].title.toUpperCase()}
                </h2>
                <p>Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directory;
