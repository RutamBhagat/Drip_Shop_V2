import "./directory.styles.scss"

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
              className="image-container tag-center md:tag-left small-container-left"
              style={{
                backgroundImage: `url(${categories[0].imageUrl})`,
              }}
            >
              <div className="tag-content small-tag-content tag-left-border">
                <h2 className="tag-font">
                  {categories[0].title.toUpperCase()}
                </h2>
                <p>Shop Now</p>
              </div>
            </div>
            <div
              className="image-container tag-center md:tag-right small-container-right"
              style={{
                backgroundImage: `url(${categories[1].imageUrl})`,
              }}
            >
              <div className="tag-content small-tag-content tag-right-border">
                <h2 className="tag-font">
                  {categories[1].title.toUpperCase()}
                </h2>
                <p>Shop Now</p>
              </div>
            </div>
            <div
              className="image-container tag-center large-container"
              style={{
                backgroundImage: `url(${categories[2].imageUrl})`,
              }}
            >
              <div className="rounded-t-[20px] tag-content large-tag-content">
                <h2 className="tag-font">
                  {categories[2].title.toUpperCase()}
                </h2>
                <p>Shop Now</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full lg:w-1/2">
            <div
              className="image-container tag-center large-container"
              style={{
                backgroundImage: `url(${categories[3].imageUrl})`,
              }}
            >
              <div className="rounded-t-[20px] tag-content large-tag-content">
                <h2 className="tag-font">
                  {categories[3].title.toUpperCase()}
                </h2>
                <p>Shop Now</p>
              </div>
            </div>
            <div
              className="image-container tag-center md:tag-left small-container-left"
              style={{
                backgroundImage: `url(${categories[4].imageUrl})`,
              }}
            >
              <div className="tag-content small-tag-content tag-left-border">
                <h2 className="tag-font">
                  {categories[4].title.toUpperCase()}
                </h2>
                <p>Shop Now</p>
              </div>
            </div>
            <div
              className="image-container tag-center md:tag-right small-container-right"
              style={{
                backgroundImage: `url(${categories[5].imageUrl})`,
              }}
            >
              <div className="tag-content small-tag-content tag-right-border">
                <h2 className="tag-font">
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
