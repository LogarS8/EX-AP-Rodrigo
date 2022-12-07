export const LocHome = function ({ inf, img, historia }) {
  return (
    <>
      <div className="col-md-6">
        <img className="img-thumbnail" src={img} alt="img" />
      </div>
      <div className="col-md-6" style={{ marginTop: "2rem" }}>
        <div className="getting-started-info">
          <p>{historia}</p>
          <p>{inf}</p>
        </div>
      </div>
    </>
  );
};
