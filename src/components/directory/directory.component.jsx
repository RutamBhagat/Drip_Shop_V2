import CategoryItem from "../category-item/category-item.component";
import "./directory.component.css"

const Directory = ({ categories }) => {
  return (
    <section className="body-font custom-bg-home pt-24 text-gray-500">
      <div className="mx-0 flex flex-wrap px-5 py-24 md:mx-5 lg:mx-12">
        <div className="mb-20 flex w-full flex-wrap">
          <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl lg:mb-0 md:w-1/2">
            All Ready-To-Wear
          </h1>
          <p className="mx-auto text-base leading-relaxed md:w-1/2 md:pl-6">
            We put our distinctive and visionary mark on DripShop’s
            ready-to-wear. Our innovative designs create a complete contemporary
            wardrobe: from reimagined staples to unexpected silhouettes, from
            casualwear to evening looks. Each collection is infused by a modern
            creativity that (re)defines elegance for the 21st century folks.
          </p>
        </div>
        <div className="flex w-full flex-wrap">
          <div className="flex w-full flex-wrap lg:w-1/2">
            <CategoryItem index={0} categories={categories} />
          </div>
          <div className="flex w-full flex-wrap-reverse lg:w-1/2">
            <CategoryItem index={3} categories={categories} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directory;
