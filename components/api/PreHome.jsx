export const PreHome = function ({ prendas }) {
  return (
    <>
      {prendas.map((i, index) => {
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
            <h3>{i.prenda}</h3>
            <p>{i.inf}</p>
            <img className="img-thumbnail" src={i.img} alt="comida" />
          </div>
        );
      })}
    </>
  );
};
