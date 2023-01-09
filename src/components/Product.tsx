import React, { useMemo } from "react";

interface Iprops {
  id: number;
  title: string;
  price: number;
  rating: number;
  images: string[];
}

const Product = (props: Iprops) => {
  const ratingStars = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(props.rating)) temp.push("fill");
      else temp.push("empty");
    }
    return temp;
  }, [props.rating]);

  return (
    <div className="card py-2 m-2 product d-inline-flex">
      <div
        id={`carousel${props.id}`}
        className="carousel slide carouselcover mx-auto me-2 w-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              alt="product "
              src={props.images[0]}
              className="d-block prodpic h-100 mx-auto"
            />
          </div>
          {props.images.map((ele, i) => {
            if (i > 0) {
              return (
                <div key={ele} className="carousel-item">
                  <img
                    alt="product "
                    src={ele}
                    className="d-block prodpic h-100 mx-auto"
                  />
                </div>
              );
            }
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#carousel${props.id}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#carousel${props.id}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h4>{props.title}</h4>
      <span>
        Price - ${props.price}
      </span>
      <span> Rating : {props.rating}{" "}
        {ratingStars.map((ele,i) => {
          if (ele === "fill")
            return <i key={i} className="bi bi-star-fill text-warning"></i>
          else
            return <i key={i} className="bi bi-star"></i>
        })}</span>
    </div>
  );
};

export default Product;
