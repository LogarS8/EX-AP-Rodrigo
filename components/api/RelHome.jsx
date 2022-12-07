import { BsSearch } from "react-icons/bs";
import { useState } from "react";

export const RelHome = function ({ relatos }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  return (
    <>
      <div className="form-group">
        <div className="input-group mb-3">
          <span className="input-group-text">
            <BsSearch />
          </span>
          <input
            type="text"
            className="form-control text-center"
            placeholder="Buscar..."
            aria-describedby="button-addon2"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-outline-danger"
            type="button"
            id="button-addon2"
            onClick={() => setFilter(search)}
          >
            Button
          </button>
          <button
            className="btn btn-outline-warning"
            type="button"
            id="button-addon2"
            onClick={() => setFilter("")}
          >
            Limpiar
          </button>
        </div>
      </div>
      {relatos
        .filter((edificacion) => {
          if (filter === "") {
            return edificacion;
          } else {
            return edificacion.titulo
              .toLowerCase()
              .includes(filter.toLowerCase());
          }
        })
        .map((i, index) => {
          return (
            <div
              key={index}
              className="col-md-5 feature-box"
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                margin: "10px",
                paddingLeft: "20px",
              }}
            >
              <h3>{i.titulo}</h3>
              <img className="img-thumbnail" src={i.img} alt="comida" />
              <div
                style={{
                  overflowY: "scroll",
                  height: "200px",
                }}
              >
                <br />
                <p>{i.contenido}</p>
              </div>
            </div>
          );
        })}
    </>
  );
};
