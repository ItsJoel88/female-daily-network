import React from "react";

function Rating(props) {
  const { rating, totalCount, hideText } = props;

  return (
    <div className="rating-container">
      {!hideText && <span className="rating product-rating">{rating}</span>}

      {[1, 2, 3, 4, 5].map((val, idx) => {
        return (
          <span
            key={idx}
            className={`rating-star ${rating >= val && "filled"}`}
          >
            &#x2605;
          </span>
        );
      })}

      {!hideText && (
        <span className="rating product-rating-total">({totalCount})</span>
      )}
    </div>
  );
}

export default Rating;
