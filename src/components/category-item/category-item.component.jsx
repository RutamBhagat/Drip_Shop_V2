import React, { Fragment } from "react";
import "./category-items.styles.scss";

const CategoryItem = ({ index, categories }) => {
  return (
    <Fragment>
      <div
        className="image-container tag-center md:tag-left small-container-left rounded-md md:rounded-bl-none"
        style={{
          backgroundImage: `url(${categories[index].imageUrl})`,
        }}
      >
        <div className="tag-content small-tag-content tag-left-border">
          <h2 className="tag-font">{categories[index].title.toUpperCase()}</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div
        className="image-container tag-center md:tag-right small-container-right rounded-md md:rounded-br-none"
        style={{
          backgroundImage: `url(${categories[index + 1].imageUrl})`,
        }}
      >
        <div className="tag-content small-tag-content tag-right-border">
          <h2 className="tag-font">
            {categories[index + 1].title.toUpperCase()}
          </h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div
        className="image-container tag-center large-container rounded-md"
        style={{
          backgroundImage: `url(${categories[index + 2].imageUrl})`,
        }}
      >
        <div className="tag-content large-tag-content rounded-t-[20px]">
          <h2 className="tag-font">
            {categories[index + 2].title.toUpperCase()}
          </h2>
          <p>Shop Now</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryItem;
