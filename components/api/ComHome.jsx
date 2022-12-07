export const ComHome = function ({ comidas }) {
  return (
    <>
      {comidas.map((comida, index) => (
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
          <h3>{comida.nombre}</h3>
          <img className="img-thumbnail" src={comida.img} alt="comida" />
        </div>
      ))}
    </>
  );
};
