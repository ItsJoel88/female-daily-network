import React from "react";
import Rating from "./Rating";

function ProductCard(props) {
  const {
    header,
    img,
    rating,
    totalCount,
    title,
    subtitle,
    description,
    imgDesc,
  } = props;

  return (
    <>
      <div className="product-card">
        {header && (
          <div className="head">
            <img src={header.image} alt="user" />
            <div className="info">
              <span className="title">{header.title}</span>
              <span className="subtitle">{header.subtitle}</span>
            </div>
          </div>
        )}

        <img src={img} alt="product" className="product-view" />

        {imgDesc && (
          <p className="small-font font-bold color-main my-2">{imgDesc}</p>
        )}
        <Rating rating={rating} totalCount={totalCount} />

        <div className="info-container">
          <span className="title">{title}</span>

          <span className="subtitle">{subtitle}</span>

          <span className="description">{description}</span>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
