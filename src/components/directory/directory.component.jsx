import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <section className="text-gray-400 bg-gray-800 body-font">
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
            <CategoryItem index={0} categories={categories} />
          </div>
          <div className="flex flex-wrap-reverse w-full lg:w-1/2">
            <CategoryItem index={3} categories={categories} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directory;
