import { useData } from "../hooks/useData";
import {
  LenHome,
  LocHome,
  PerHome,
  ComHome,
  PreHome,
  EdiHome,
  RelHome,
} from "./";

export const Home = function () {
  const locacion = useData("locacion"),
    lenguas = useData("lenguas"),
    periodos = useData("periodos"),
    comidas = useData("comidas"),
    prendas = useData("prendas"),
    edificaciones = useData("edificaciones"),
    relatos = useData("relatos");

  return (
    <>
      <main className="page landing-page">
        <section className="clean-block clean-info" style={{ padding: "0px" }}>
          <div className="container">
            <div className="block-heading">
              <h1>Civilización babilónica</h1>
              <h5 className="text-warning"> Por: Rodrigo Lopez Garnica</h5>
            </div>
            <div className="row align-items-center">
              {locacion.isLoading ? (
                <p>Cargando...</p>
              ) : (
                <LocHome
                  inf={locacion.data.inf}
                  img={locacion.data.img}
                  historia={locacion.data.historia}
                />
              )}
            </div>
          </div>
        </section>

        <section className="clean-block slider">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-danger">Periodos</h2>
            </div>
            {/*  */}
            {periodos.isLoading ? (
              <p>Cargando...</p>
            ) : (
              <PerHome periodos={periodos.data} />
            )}
          </div>
        </section>

        <section className="clean-block features">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-danger">Lenguas</h2>
              <p>Algunas de las lenguas que se hablaron en Babilonia</p>
              <hr />
              {lenguas.isLoading ? (
                <p>Cargando...</p>
              ) : (
                <LenHome lenguas={lenguas.data} />
              )}
            </div>
          </div>
        </section>

        <section className="clean-block features">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-danger">Comidas</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="row justify-content-center">
              {comidas.isLoading ? (
                <p>Cargando...</p>
              ) : (
                <ComHome comidas={comidas.data} />
              )}
            </div>
          </div>
        </section>

        <section className="clean-block features">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-danger">Prendas</h2>
            </div>
            <div className="row justify-content-center">
              {prendas.isLoading ? (
                <p>Cargando...</p>
              ) : (
                <PreHome prendas={prendas.data} />
              )}
            </div>
          </div>
        </section>

        <section className="clean-block features">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-danger">Edificaciones</h2>
            </div>
            <div className="row justify-content-center">
              {edificaciones.isLoading ? (
                <p>Cargando...</p>
              ) : (
                <EdiHome edificaciones={edificaciones.data} />
              )}
            </div>
          </div>
        </section>

        <section className="clean-block features">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-danger">Decires</h2>
            </div>
            <div className="row justify-content-center">
              {relatos.isLoading ? (
                <p>Cargando...</p>
              ) : (
                <RelHome relatos={relatos.data} />
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
