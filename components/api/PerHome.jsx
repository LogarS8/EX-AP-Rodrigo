import { useState } from "react";

export const PerHome = function ({ periodos }) {
  return (
    <div className="carousel slide" data-bs-ride="carousel" id="carousel-1">
      <div className="carousel-inner">
        {periodos.map((periodo, index) => {
          return (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                className="w-100 d-block"
                src={periodo.img}
                alt="Slide Image"
                style={{ maxHeight: "400px" }}
              />
              <div className="carousel-caption md-block">
                <h6
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    opacity: "0.8 ",
                    borderRadius: "10px",
                  }}
                >
                  {periodo.nombre}
                </h6>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <a
          className="carousel-control-prev"
          href="#carousel-1"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-1"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carousel-1"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
        <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
      </ol>
    </div>
  );
};
